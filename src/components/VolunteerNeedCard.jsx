import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {allposts.slice(0, 6).map((post, idx) => (
          <div key={post._id}>
            <Fade direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="card card-compact  bg-base-100 shadow-xl">
                <div className="overflow-hidden">
                  <figure>
                    <img
                      className="hover:scale-105 transition-all"
                      src={post?.thumbnail}
                      alt="coming soon..."
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{post?.category}</h2>

                  <p className=" text-2xl font-bold text-blue-600">
                    {" "}
                    {post?.title}
                  </p>
                  <p>
                    <span className=" text-lg font-bold">Deadline</span>:{" "}
                    <span className="text-lg">
                      {" "}
                      {post?.deadline.split("T")[0]}
                    </span>
                  </p>
                  <p className="text-lg">
                    <strong>Need Volunteers :</strong> {post?.number}
                  </p>
                  <div className="card-actions w-full">
                    <Link
                      to={`/volunteerDetails/${post?._id}`}
                      className="btn w-full text-white text-xl bg-gradient-to-r from-green-500 via-green-600 to-blue-500"
                    >
                      View Details{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </>
  );
};

export default VolunteerNeedCard;
