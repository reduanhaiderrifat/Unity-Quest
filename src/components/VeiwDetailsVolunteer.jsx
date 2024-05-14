import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { IoMdLocate } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const VeiwDetailsVolunteer = () => {
  const [singleData, setSingleData] = useState({});
  const [loader, sestLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {
    _id,
    title,
    thumbnail,
    location,
    description,
    category,
    deadline,
    number,
    Organaization_name,
    organizer_email,
    userImage,
  } = singleData;
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/singlePost/${id}`);
      setSingleData(data);
      sestLoading(false);
    };

    getData();
  }, [id, axiosSecure]);

  if (loader) {
    <div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  const handleNoNeedVolunteer = () => {
    Swal.fire({
      icon: "info",
      title: "No Volunteer Needed",
      text: "There are currently no volunteer opportunities available.",
    });
  };
  return (
    <>
      <Helmet>
        <title>UnityQuest-Post-Details</title>
      </Helmet>
      <div className=" flex justify-center">
        <div className="">
          <div className="hidden lg:flex">
            <img
              className="w-full h-[500px]"
              src={thumbnail}
              alt="comming soon..."
            />
          </div>
          <div className="flex ">
            <div className="flex flex-col md:max-w-3xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between gap-2">
                <div className="flex space-x-4">
                  <div
                    className="tooltip tooltip-right"
                    data-tip="Organaization Photo"
                  >
                    <button className="">
                      <img
                        alt="coming soon..."
                        src={userImage}
                        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                      />
                    </button>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <p className="text-md font-semibold">
                      <div
                        className="tooltip tooltip-right"
                        data-tip="Organaization Name"
                      >
                        <button className="">{Organaization_name}</button>
                      </div>
                    </p>
                    <span className="text-md dark:text-gray-600">
                      <div
                        className="tooltip tooltip-right"
                        data-tip="Organaization Email"
                      >
                        <button className=" break-all">
                          {organizer_email}
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
                <p>
                  <span className=" font-bold">Deadline</span> :
                  {deadline?.split("T")[0]}
                </p>
              </div>
              <div>
                <img
                  src={thumbnail}
                  alt=""
                  className="object-cover w-full lg:hidden mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
                <h3 className="text-xl font-medium text-blue-500 mb-3">
                  {category}
                </h3>
                <p className="mb-1 flex items-center gap-2">
                  <IoMdLocate /> <strong>Location</strong> : {location}
                </p>
                <p className="flex items-center gap-2">
                  <FaUsers /> <strong>Number of Volunteers</strong> : {number}
                </p>
                <h2 className="mb-1 text-xl font-semibold mt-3">{title}</h2>
                <p className="text-sm dark:text-gray-600 mt-3">
                  <strong>Description : </strong> {description}
                </p>
              </div>
              <div className=" w-2/3 mx-auto">
                {number > 0 ? (
                  <Link
                    to={`/bevolunteer/${_id}`}
                    className="btn mt-8 w-full bg-gradient-to-r from-cyan-500 to-green-500 text-white border-white text-lg"
                  >
                    Be a Volunteer
                  </Link>
                ) : (
                  <button
                    className="btn mt-8 w-full bg-gradient-to-r from-cyan-500 to-green-500 text-white border-white text-lg"
                    onClick={handleNoNeedVolunteer}
                  >
                    Be a Volunteer
                  </button>
                )}
              </div>
            </div>

            <div className="hidden  lg:flex justify-center items-center">
              <img
                src={thumbnail}
                alt="soming soon..."
                className="object-cover w-full mb-4   sm:h-96 dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VeiwDetailsVolunteer;
