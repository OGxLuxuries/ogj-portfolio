import Topnav from "./TopNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Topnav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
