import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OwnPost from "../components/OwnPost";
import OwnRequest from "../components/OwnRequest";
import { Helmet } from "react-helmet-async";

const ManagementPost = () => {
  return (
    <div>
      <Helmet>
        <title>UnityQuest-Management-Post</title>
      </Helmet>
      <Tabs>
        <div className="flex justify-center mb-5 mt-10">
          <TabList>
            <Tab>My Volunteer Post</Tab>
            <Tab>My Volunteer Request</Tab>
          </TabList>
        </div>
        <TabPanel>
          <OwnPost />
        </TabPanel>
        <TabPanel>
          <OwnRequest />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ManagementPost;
