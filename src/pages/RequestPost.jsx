import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const RequestPost = () => {
  const [posts, setPosts] = useState();
  console.log(posts);
  const [loader, sestLoading] = useState(true);
  const { user } = useAuth();
  const Allposts = useLoaderData();

  const find = Allposts?.find((post) => post?.number);
  const number = find?.number;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL_SERVER}/request/${user?.email}`,
        {
          withCredentials: true,
        }
      );
      setPosts(data);
      sestLoading(false);
    };

    getData();
  }, [user]);
  //deelete
  const handleDelete = async (_id, id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axios.delete(
          `${import.meta.env.VITE_URL_SERVER}/requestDelete/${_id}`
        );
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Request has been deleted.",
            icon: "success",
          });
          const remaining = posts.filter((post) => post._id !== _id);
          setPosts(remaining);
          await axios.patch(
            `${import.meta.env.VITE_URL_SERVER}/requestUpdateIncrese/${id}`,
            number
          );
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-[calc(100vh-230px)] flex flex-col justify-center items-center gap-4">
        <h2 className=" text-5xl font-semibold">
          <i>NO DATA AVAILABLE</i>
        </h2>
        <p className=" text-3xl font-semibold">
          <i>PLEASE! REUEST SOME</i>
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-[calc(100vh-230px)] ">
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
                  <th>Deadline</th>
                  <th>Request</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {posts.map((post, idx) => (
                  <tr key={post._id}>
                    <th>{idx + 1}</th>
                    <td>{post?.category}</td>

                    <td>{post?.title}</td>
                    <td>{post?.location}</td>
                    <td>{post?.deadline.split("T")[0]}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleDelete(post._id, post?.id);
                        }}
                        className="btn w-2/3  my-2   bg-gradient-to-r from-red-500 to-orange-500 text-white  text-lg"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default RequestPost;
