import { useEffect, useState } from "react";
import { IoTabletLandscape } from "react-icons/io5";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import toast from "react-hot-toast";
import { FaAnglesDown } from "react-icons/fa6";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const NeedVolunter = () => {
  const [posts, setAllPost] = useState([]);
  const [loader, setLoader] = useState(true);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/allPost`);
      setAllPost(data);
      setLoader(false);
    };
    getData();
  }, [axiosSecure]);
  const handleSearch = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    try {
      const { data } = await axiosSecure.get(`/titlePost/${search}`);
      if (data.length === 0) {
        toast.error("No matching titles found.");
      } else {
        setAllPost(data);
        setLoader(false);
      }
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please provide the title!",
        });
      }
    }
  };
  const copyText = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    toast.success("Text copied to clipboard!");
  };
  if (posts.length === 0) {
    return (
      <div className="min-h-[calc(100vh-230px)] flex flex-col justify-center items-center">
        <h2 className=" text-5xl font-semibold">
          <i>OOPS!!!</i>
        </h2>
        <p className=" text-3xl font-semibold">
          <i>NO DATA AVAILABLE</i>
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>UnityQuest-Need-Volunteer</title>
      </Helmet>
      <div className="min-h-[calc(100vh-230px)] bg-base-100">
        <div className="flex justify-center w-full ">
          <div className="border-b-4 border-green-600 p-2 mt-2 rounded-full w-full md:w-2/3 lg:w-1/3">
            <form onSubmit={(e) => handleSearch(e)}>
              <label className="flex items-center">
                <input
                  className="input rounded-full w-full"
                  type="text"
                  name="search"
                  placeholder="search by post title..."
                />
                <button className="button">
                  <FcSearch size={45} />
                </button>
              </label>
            </form>
          </div>
        </div>
        <div className="w-full ">
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              className="m-1 btn bg-blue-700 text-white hover:bg-blue-800"
            >
              Title's clue for search <FaAnglesDown />
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow-md overflow-y-scroll h-96 menu dropdown-content z-50 bg-white text-black rounded-md w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {posts?.map((post) => (
                <li key={post._id} className="mb-3 border-b-2 border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="">{post?.title}</span>
                    <button
                      onClick={() => copyText(post?.title)}
                      className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Copy
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Tabs>
          <div className="flex justify-end ">
            <TabList>
              <Tab>
                <div className="tooltip" data-tip="Card">
                  <button className="">
                    <RiLayoutGrid2Fill size={35} />
                  </button>
                </div>
              </Tab>

              <Tab>
                <div className="tooltip" data-tip="Table">
                  <button className="">
                    <IoTabletLandscape size={35} />
                  </button>
                </div>
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            {loader ? (
              <div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
                  {posts?.map((post, idx) => (
                    <PostCard key={post._id} idx={idx} post={post} />
                  ))}
                </div>
              </>
            )}
          </TabPanel>
          <TabPanel>
            {loader ? (
              <div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr className="bg-gradient-to-r from-cyan-600 to-green-500 text-white text-lg">
                        <th></th>
                        <th>Category</th>
                        <th>Post Title</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Veiw Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {posts?.map((post, idx) => (
                        <tr key={post._id}>
                          <th>{idx + 1}</th>
                          <td>{post?.category}</td>

                          <td>{post?.title}</td>
                          <td>{post?.location}</td>
                          <td>{post?.number}</td>
                          <td>
                            <Link
                              to={`/volunteerDetails/${post._id}`}
                              className="btn w-2/3  my-2   bg-gradient-to-r from-cyan-500 to-green-500 text-white  text-lg"
                            >
                              Veiw
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default NeedVolunter;
