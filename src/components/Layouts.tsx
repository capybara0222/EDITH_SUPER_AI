import { retrieveLaunchParams } from "@telegram-apps/sdk"
import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

const Layouts = () => {
  const { initData } = retrieveLaunchParams();

  const fetchUser = async () => {
    if (initData && initData.user) {
      console.log(initData.user);
      await axios
        .post("https://b56c-162-251-62-70.ngrok-free.app/api/user", {
          user_id: initData.user.id,
          refer_code: "string",
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("Success", response.data)
          }
          else {
            console.log("Error", response.data)
          }
        })
        .catch((error) => console.log("Error", error));
    } else {
      console.log("User data is not available");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Outlet />
      <Tabs />
    </>
  )   
}

export default Layouts