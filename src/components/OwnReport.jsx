import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const OwnReport = () => {
  const [reports, setReport] = useState([]);
  const [loader, setLoader] = useState(true);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(reports);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/copy/${user?.email}`);
      setReport(data);
      setLoader(false);
    };
    getData();
  }, [axiosSecure, user]);
  if (loader) {
    return (
      <div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 min-h-[calc(100vh-230px)]">
      <div className="">
        {reports?.map((report) => (
          <div key={report._id} className="max-w-lg border p-4">
            <h2 className="font-bold text-2xl">{report?.name}</h2>
            <p className="mb-8 mt-2">{report?.email}</p>
            <p>
              <strong>Report</strong> : {report?.report}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnReport;
