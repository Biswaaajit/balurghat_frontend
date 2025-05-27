import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";

function AppLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default AppLayout;
