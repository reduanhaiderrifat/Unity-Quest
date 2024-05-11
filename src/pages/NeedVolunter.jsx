import axios from "axios";
import { useEffect, useState } from "react";
import { IoTabletLandscape } from "react-icons/io5";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
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

  return (
    <div className="min-h-[calc(100vh-230px)]">
      <div className="flex justify-center w-full ">
        <div className="border-2 p-2 rounded-full w-1/3">
          <label className="flex items-center">
            <input
              className=" rounded-full w-full"
              type="text"
              name=""
              placeholder="search by post title..."
            />
            <button className="button">
              <FcSearch size={45} />
            </button>
          </label>
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
