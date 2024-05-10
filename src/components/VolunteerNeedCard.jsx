import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteerNeedCard = () => {
  const [allposts, setAllPost] = useState([]);
  const [loader, setLoader] = useState(true);
  console.log(allposts);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL_SERVER}/sortPost`,
        {
          withCredentials: true,
        }
      );
      setAllPost(data);
      setLoader(false);
    };
    getData();
  }, []);
  if (loader) {
    return (
      <div className="min-h-[calc(100vh-230px)] w-full flex justify-center border">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {allposts.slice(0, 6).map((post) => (
        <div
          key={post._id}
          className="card card-compact  bg-base-100 shadow-xl"
        >
          <figure>
            <img src={post?.thumbnail} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post?.category}</h2>
            <p className=" text-2xl font-bold text-blue-600"> {post?.title}</p>
            <p>
              <span className=" text-lg font-bold">Deadline</span>:{" "}
              <span className="text-lg"> {post?.deadline.split("T")[0]}</span>
            </p>
            <div className="card-actions w-full">
              <Link
                to={`/volunteerDetails/${post?._id}`}
                className="btn w-full btn-primary"
              >
                View Details{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VolunteerNeedCard;
