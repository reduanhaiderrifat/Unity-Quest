import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OwnPost from "../components/OwnPost";
import OwnRequest from "../components/OwnRequest";

const ManagementPost = () => {
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
          <OwnRequest />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ManagementPost;
