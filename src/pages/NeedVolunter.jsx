import axios from "axios";
import { useEffect, useState } from "react";
import { IoTabletLandscape } from "react-icons/io5";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostCard from "../components/PostCard";
import { Link, useLoaderData } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import toast from "react-hot-toast";
import { FaAnglesDown } from "react-icons/fa6";
const NeedVolunter = () => {
  const titles = useLoaderData();
  const [posts, setAllPost] = useState([]);
  const [loader, setLoader] = useState(true);
  console.log(posts);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL_SERVER}/allPost`,
        {
          withCredentials: true,
        }
      );
      setAllPost(data);
      setLoader(false);
    };
    getData();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL_SERVER}/titlePost/${search}`,
        {
          withCredentials: true,
        }
      );
      if (data.length === 0) {
        toast.error("No matching titles found.");
      } else {
        setAllPost(data);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
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
  return (
    <div className="min-h-[calc(100vh-230px)]">
      <div className="flex justify-center w-full ">
        <div className="border-2 p-2 rounded-full w-full md:w-2/3 lg:w-1/3">
          <form onSubmit={(e) => handleSearch(e)}>
            <label className="flex items-center">
              <input
                className=" rounded-full w-full"
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
        <div className="dropdown w-full ">
          <div tabIndex={0} className="m-1 btn">
            Title clue for search <FaAnglesDown />
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow-md overflow-y-scroll h-96 menu dropdown-content z-50 bg-white rounded-md w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {titles?.map((post) => (
              <li key={post._id} className="mb-3 border-b-2 border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-base">{post.title}</span>
                  <button
                    onClick={() => copyText(post.title)}
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
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
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
                    <tr>
                      <th></th>
                      <th>Category</th>
                      <th>Post Title</th>
                      <th>Location</th>
                      <th>Number of Volunteers</th>
                      <th>Veiw Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {posts.map((post, idx) => (
                      <tr key={post._id}>
                        <th>{idx + 1}</th>
                        <td>{post.category}</td>

                        <td>{post.title}</td>
                        <td>{post.location}</td>
                        <td>{post.number}</td>
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
  );
};

export default NeedVolunter;
