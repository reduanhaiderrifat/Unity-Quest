import axios from "axios";
import { useEffect, useState } from "react";
import { IoTabletLandscape } from "react-icons/io5";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostCard from "../components/PostCard";
const NeedVolunter = () => {
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

  return (
    <div className="min-h-[calc(100vh-230px)]">
      <Tabs>
        <div className="flex justify-center ">
          <TabList>
            <Tab>
              <RiLayoutGrid2Fill size={40} />
            </Tab>

            <Tab>
              <IoTabletLandscape size={40} />
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </>
          )}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default NeedVolunter;
