import { Outlet } from "react-router-dom";
import Nav from "./navigation"; // Import navbar

const Layout = () => {
  return (
    <>
      <Nav /> {/* Navbar remains fixed */}
      <Outlet /> {/* Dynamic content changes here */}
    </>
  );
};

export default Layout;
