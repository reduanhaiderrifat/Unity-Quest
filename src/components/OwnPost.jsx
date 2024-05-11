import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const OwnPost = () => {
  const [posts, setPosts] = useState();
  console.log(posts);
  const [loader, sestLoading] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL_SERVER}/posts/${user?.email}`,
        {
          withCredentials: true,
        }
      );
      setPosts(data);
      sestLoading(false);
    };

    getData();
  }, [user]);

  //Delete
  const handleDelete = async (id) => {
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
          `${import.meta.env.VITE_URL_SERVER}/delete/${id}`
        );
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Post has been deleted.",
            icon: "success",
          });
          const remaining = posts.filter((post) => post._id !== id);
          setPosts(remaining);
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  if (!posts || (posts.length === 0 && !loader)) {
    return (
      <div className="min-h-[calc(100vh-230px)] flex flex-col justify-center items-center gap-4">
        <h2 className=" text-5xl font-semibold">
          <i>NO DATA AVAILABLE</i>
        </h2>
        <p className=" text-3xl font-semibold">
          <i>PLEASE! ADD SOME POST</i>
        </p>
        <Link
          to="/addPost"
          className="text-2xl font-medium btn text-white bg-gradient-to-r from-sky-500 to-indigo-500"
        >
          Add Post
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div>
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
                    <th>Number of Volunteers</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {posts.map((post, idx) => (
                    <tr key={post._id}>
                      <th>{idx + 1}</th>
                      <td>{post.category}</td>
                      <td>{post.title}</td>
                      <td>{post.number}</td>
                      <td>
                        <Link
                          to={`/update/${post._id}`}
                          className="btn w-2/3  my-2   bg-gradient-to-r from-cyan-500 to-green-500 text-white  text-lg"
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="btn text-white bg-gradient-to-r from-red-500 to-orange-500"
                        >
                          Delete
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
    </div>
  );
};

export default OwnPost;
