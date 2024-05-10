import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdLocate } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const VeiwDetailsVolunteer = () => {
  const [singleData, setSingleData] = useState({});
  const [loader, sestLoading] = useState(true);

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
  } = singleData;
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL_SERVER}/singlePost/${id}`,
        {
          withCredentials: true,
        }
      );
      setSingleData(data);
      sestLoading(false);
    };

    getData();
  }, [id]);

  if (loader) {
    <div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  console.log(singleData);

  return (
    <div>
      <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        {/* <div className="flex space-x-4">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              Leroy Jenkins
            </a>
            <span className="text-xs dark:text-gray-600">4 hours ago</span>
          </div>
        </div> */}
        <div>
          <img
            src={thumbnail}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="flex justify-between mx-[12%]">
            <div className="">
              <h2 className="mb-1 text-xl font-semibold">{category}</h2>
              <h1 className="mb-1 text-2xl font-semibold">{title}</h1>
            </div>
            <p>
              <span className=" font-bold">Deadline</span>:{" "}
              {deadline?.split("T")[0]}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-around mt-12">
            <div className="space-x-2">
              <p className=" text-lg font-bold">
                <span className="text-xl"> Organaization_name </span> :{" "}
                {Organaization_name}
              </p>
              <p className=" text-lg font-bold">
                <span className="text-xl">Organaization_name</span> :{" "}
                {organizer_email}
              </p>
            </div>
            <div className=" space-y-2 text-sm dark:text-gray-600">
              <p className="flex items-center">
                <span className=" text-lg font-bold">Location : </span>
                <span className="flex items-center gap-2">
                  <IoMdLocate size={25} />{" "}
                  <span className="text-lg text-blue-500">{location}</span>
                </span>
              </p>
              <p>
                {" "}
                <span className=" text-lg font-bold">
                  Number of Volunteers : {""}
                </span>
                {number}
              </p>
            </div>
          </div>
          <div className=" flex justify-center mt-6">
            <Link
              to={`/bevolunteer/${_id}`}
              className="btn w-1/3  bg-gradient-to-r from-cyan-500 to-green-500 text-white border-white text-lg"
            >
              Be Volunteer
            </Link>
          </div>
          <p className="text-lg dark:text-gray-600 mt-12">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VeiwDetailsVolunteer;
