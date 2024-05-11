import axios from "axios";
import { useEffect, useState } from "react";
import { IoTabletLandscape } from "react-icons/io5";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
const NeedVolunter = () => {
  const [posts, setAllPost] = useState([]);
  const [loader, setLoader] = useState(true);
  // const [searchQuery, setSearchQuery] = useState("");
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
  // const handleSearch = async (e) => {
  //   const query = e.target.value;
  //   setSearchQuery(query);
  //   try {
  //     const { data } = await axios.get(
  //       `${import.meta.env.VITE_URL_SERVER}/searchPost/${searchQuery}`,
  //       {
  //         params: { query: encodeURIComponent(query) },
  //         withCredentials: true,
  //       }
  //     );
  //     setAllPost(data);
  //   } catch (error) {
  //     console.error("Error searching posts:", error);
  //   }
  // };
  return (
    <div className="min-h-[calc(100vh-230px)]">
      <div className="w-full flex justify-center">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            // value={searchQuery}
            // onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-9 h-9 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <Tabs>
        <div className="flex justify-end ">
          <TabList>
            <Tab>
              <RiLayoutGrid2Fill size={35} />
            </Tab>

            <Tab>
              <IoTabletLandscape size={35} />
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
