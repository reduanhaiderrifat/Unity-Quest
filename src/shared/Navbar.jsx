import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaPhotoVideo, FaUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { user, loading, updateUser, logOut } = useAuth();
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          className="hover:bg-base-200 p-2 font-bold   hover:rounded-lg"
          style={({ isActive, isTransiTion }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#00684A" : "",
              borderBottom: isActive ? "4px solid #00684A" : "",
              viewTimelineName: isTransiTion ? "silder" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-base-200 p-2 font-bold   hover:rounded-lg"
          style={({ isActive, isTransiTion }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#00684A" : "",
              borderBottom: isActive ? "4px solid #00684A" : "",
              viewTimelineName: isTransiTion ? "silder" : "",
            };
          }}
          to="/need"
        >
          Need Volunteer{" "}
        </NavLink>
      </li>
      <li>
        <div className="dropdown dropdown-hover ">
          <div
            tabIndex={0}
            className="m-1 flex items-center gap-2 font-bold cursor-pointer"
          >
            My Profile <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                style={({ isActive, isTransiTion }) => {
                  return {
                    fontWeight: isActive ? "bold" : "bold",
                    color: isActive ? "#FFF" : "",
                    borderBottom: isActive ? "4px solid #00684A" : "",
                    viewTimelineName: isTransiTion ? "silder" : "",
                  };
                }}
                to="/addPost"
              >
                Add Volunteer Post
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isTransiTion }) => {
                  return {
                    fontWeight: isActive ? "bold" : "bold",
                    color: isActive ? "#FFF" : "",
                    borderBottom: isActive ? "4px solid #00684A" : "",
                    viewTimelineName: isTransiTion ? "silder" : "",
                  };
                }}
                to="/managePost"
              >
                Manage My Post
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isTransiTion }) => {
                  return {
                    fontWeight: isActive ? "bold" : "bold",
                    color: isActive ? "#FFF" : "",
                    borderBottom: isActive ? "4px solid #00684A" : "",
                    viewTimelineName: isTransiTion ? "silder" : "",
                  };
                }}
                to="/requestPost"
              >
                My Volunteer Requested Post
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
    if (localTheme) {
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.querySelector("html").setAttribute("data-theme", "light");
      setTheme("light");
    }
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const username = from.get("username");
    const photo = from.get("photo");
    updateUser(username, photo).then(() => {
      toast.success("Profile update successfully");
    });
  };
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("User logOut successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="my-2 p-4 bg-base-300 rounded-2xl ">
        <div className="flex justify-between items-center shadow-sm">
          <div className="flex items-center">
            <div className="">
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden mr-2 hover:bg-slate-200 p-2 rounded-lg "
              >
                {open === true ? (
                  <IoCloseSharp size={30} />
                ) : (
                  <FaBarsStaggered size={30} />
                )}
              </button>
              <div
                className={`lg:hidden top-20 fixed inset-0 z-50 transition-transform ${
                  open
                    ? "transform-none duration-500 pointer-events-auto"
                    : "-translate-x-full pointer-events-none"
                }`}
              >
                <div className=" h-full w-full ">
                  <ul className="bg-base-200 p-4 px-6  shadow-lg space-y-5 flex flex-col rounded-r-lg">
                    {links}
                  </ul>
                </div>
              </div>
            </div>
            <h1 className="  text-2xl nosifer-regular ">
              Unity<span className="text-[#00684A]">Quest</span>
            </h1>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6">{links}</ul>
          </div>

          <div className="flex items-center gap-2">
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "dark"}
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            {loading ? (
              <span className="loading loading-spinner loading-md mr-3"></span>
            ) : user ? (
              <div className="flex items-center gap-2">
                <div className="dropdown dropdown-hover dropdown-left ">
                  <div tabIndex={0} role="button" className=" m-1">
                    <img
                      className="w-10 h-10 rounded-full "
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content z-50 card card-compact w-64 p-2 shadow-lg bg-white text-primary-content"
                  >
                    <div className="hidden md:block lg:block text-end">
                      <details className="dropdown ">
                        <summary className="m-1 btn">
                          <div
                            className="tooltip tooltip-left"
                            data-tip="update profile!"
                          >
                            <FaEdit size={25} />
                          </div>
                        </summary>

                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-72">
                          <form onSubmit={handleUpdateProfile}>
                            <label className="input input-bordered mb-4 flex text-secondary items-center gap-2">
                              <FaUser></FaUser>

                              <input
                                type="text"
                                name="username"
                                className="grow text-secondary"
                                placeholder="Username"
                              />
                            </label>
                            <label className="input input-bordered mb-4 flex text-secondary items-center gap-2">
                              <FaPhotoVideo size={20} />
                              <input
                                type="text"
                                name="photo"
                                className="grow text-secondary"
                                placeholder="Photo_URL"
                              />
                            </label>
                            <label>
                              <button className="btn text-white text-xl w-full bg-gradient-to-r from-green-500 to-green-700">
                                Update
                              </button>
                            </label>
                          </form>
                        </ul>
                      </details>
                    </div>
                    <div className="card-body">
                      <img
                        className="w-32 h-32 rounded-full text-center mx-auto"
                        src={
                          user.photoURL ||
                          "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                        }
                        alt=""
                      />
                      <h3 className="card-title text-black">
                        {user.displayName}
                      </h3>
                      <p className=" text-black">{user.email}</p>
                    </div>
                    <button className="btn mb-3">
                      <Link to="/ownreport">Your Report</Link>
                    </button>
                    <button onClick={handleLogout} className=" btn">
                      <FiLogOut size={25} /> Logout
                    </button>
                  </div>
                </div>
                <div className="dropdown md:hidden lg:hidden dropdown-hover dropdown-left dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="hover:bg-base-200 rounded-lg p-3 m-1"
                  >
                    <BsThreeDotsVertical />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <div className=" flex flex-col ">
                      <button
                        onClick={handleLogout}
                        className=" btn text-[#00684A] bg-transparent border-[#00684A] hover:text-white hover:bg-[#00684A]"
                      >
                        <FiLogOut size={20} /> Logout
                      </button>
                    </div>
                  </ul>
                </div>
                <div className="hidden md:flex lg:flex xl:flex">
                  <button
                    onClick={handleLogout}
                    className=" btn text-[#00684A] bg-transparent border-[#00684A] hover:text-white hover:bg-[#00684A]"
                  >
                    <FiLogOut size={20} /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="dropdown md:hidden lg:hidden dropdown-hover dropdown-left dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="hover:bg-base-200 rounded-lg p-3 m-1"
                  >
                    <BsThreeDotsVertical />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <div className=" flex flex-col ">
                      <Link
                        to="/login"
                        className="btn text-[#00684A] bg-transparent border-[#00684A] hover:text-white hover:bg-[#00684A]"
                      >
                        Login
                      </Link>
                    </div>
                  </ul>
                </div>

                <div className="hidden md:flex lg:flex ">
                  <Link
                    to="/login"
                    className="btn text-[#00684A] bg-transparent border-[#00684A] hover:text-white hover:bg-[#00684A]"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
