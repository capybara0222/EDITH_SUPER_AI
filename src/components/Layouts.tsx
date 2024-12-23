import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

const Layouts = () => {

  return (
    <>
      <Outlet />
      <Tabs />
    </>
  )   
}

export default Layouts