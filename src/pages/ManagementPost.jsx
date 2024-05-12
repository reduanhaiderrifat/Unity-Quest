import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OwnPost from "../components/OwnPost";
import OwnRequest from "../components/OwnRequest";
import { useLoaderData } from "react-router-dom";

const ManagementPost = () => {
  const posts = useLoaderData();
  console.log(posts);
  const find = posts?.find((post) => post?.number);
  const number = find?.number;
  console.log(number);
  return (
    <div>
      <Tabs>
        <div className="flex justify-center my-10">
          <TabList>
            <Tab>My Volunteer Post</Tab>
            <Tab>Be Volunteer Request</Tab>
          </TabList>
        </div>

        <TabPanel>
          <OwnPost />
        </TabPanel>
        <TabPanel>
          <OwnRequest number={number} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ManagementPost;
