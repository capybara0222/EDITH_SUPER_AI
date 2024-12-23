import { createContext, useContext, useEffect, useState } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk"
import axios from "axios";
import { Activity, UserContextTypes, UserData, UserProfile } from "../libs/types";

const UserContext = createContext<UserContextTypes | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { initData } = retrieveLaunchParams();

  const [userProfile, setUserProfile] = useState<UserProfile>({
    fullname: "",
    username: "",
  });
  const [userData, setUserData] = useState<UserData>({
    user_id: '',
    level: 0,
    points: 0,
    referralCount: 0,
  });
  const [activities, setActivities] = useState<Activity[]>([]);

  const fetchUser = async () => {
    if (initData && initData.user) {
      console.log(initData.user);
      setUserProfile({
        fullname: initData.user.firstName + " " + initData.user.lastName,
        username: initData.user.username,
      });

      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
          user_id: initData.user.id,
          refer_code: "string",
        })
        .then((response) => {
          setUserData({
            user_id: response.data.user_id,
            level: response.data.level,
            points: response.data.points,
            referralCount: response.data.referralCode,
          });
        })
        .catch((error) => {
          console.log("Error", error);
        });

      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/acitivites`, {
          user_id: initData.user.id,
          refer_code: "string",
        })
        .then((response) => {
          const transformedActivities: Activity[] = response.data.map((item: { rewarded_by: { user_id: string }; type: string; referral_code: string; points: number; createdAt: string; }) => ({
            rewarded_user_id: item.rewarded_by.user_id,
            type: item.type,
            referral_code: item.referral_code,
            points: item.points,
            created_at: item.createdAt,
          }));
          setActivities(transformedActivities);
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
  }, []);

  return (
    <UserContext.Provider value={{ userProfile, userData, activities }}>
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