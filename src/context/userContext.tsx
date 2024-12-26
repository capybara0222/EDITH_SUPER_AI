import { createContext, useContext, useEffect, useState } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk"
import axios from "axios";
import { Activity, UserActivities, UserContextTypes, UserData, UserProfile } from "../libs/types";
import { useLocation } from "react-router-dom";

const UserContext = createContext<UserContextTypes | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { initData } = retrieveLaunchParams();

  const [userProfile, setUserProfile] = useState<UserProfile>({
    fullname: "",
    username: "",
  });
  const [userData, setUserData] = useState<UserData>({
    user_id: '',
    level: 0,
    max: 0,
    min: 0,
    points: 0,
  });
  const [userActivities, setUserActivities] = useState<UserActivities>({
    referralCode: "",
    activities: [],
    maxReferralDepth: 0,
    referralCount: 0,
  });

  const fetchUser = async () => {
    if (initData && initData.user) {
      console.log(initData.user);
      setUserProfile({
        fullname: initData.user.firstName + " " + initData.user.lastName,
        username: initData.user.username,
      });
      // setUserProfile({
      //   fullname: "aa",
      //   username: "aaaaa",
      // });
      console.log(location);
      const queryParams = new URLSearchParams(location.search);
      console.log("query", queryParams)
      const refer_code = queryParams.get('ref') || '';
      console.log("refer_code", refer_code)

      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
          user_id: initData.user.id,
          // user_id: 7902084350,
          refer_code,
        })
        .then((response) => {
          console.log('refer', refer_code)
          console.log(response)
          setUserData({
            level: response.data.level.current_level,
            max: response.data.level.max,
            min: response.data.level.min,
            points: response.data.user.points,
            user_id: response.data.user_id,
          });
        })
        .catch((error) => {
          console.log("Error", error);
        });

      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/user/activity`, {
          user_id: initData.user.id,
          // user_id: 7902084350,
          refer_code,
        })
        .then((response) => {
          console.log(response)
          const activityData = Array.isArray(response.data.activities) ? response.data.activities : [];

          const transformedActivities: Activity[] = activityData.map((item: { rewarded_by: { user_id: string }; type: string; referral_code: string; points: number; createdAt: string; }) => ({
            rewarded_user_id: item.rewarded_by.user_id,
            type: item.type,
            referral_code: item.referral_code,
            points: item.points,
            created_at: item.createdAt,
          }));

          setUserActivities({
            referralCode: response.data.user.referral_code,
            activities: transformedActivities,
            maxReferralDepth: response.data.user.maxReferralDepth,
            referralCount: response.data.user.referralCount,
          });
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      console.log("User data is not available");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [location.search]);

  return (
    <UserContext.Provider value={{ userProfile, userData, userActivities }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}