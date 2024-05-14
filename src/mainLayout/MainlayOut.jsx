import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainlayOut = () => {
  return (
    <div className="px-2 md:px-4 mx-auto">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainlayOut;
