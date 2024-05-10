import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManagementPost = () => {
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
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_URL_SERVER}/delete/${id}`
      );
      console.log(data);
      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
        });
        const remaing = posts.filter((post) => post._id !== id);
        setPosts(remaing);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loader) {
    <div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  if (!posts) {
    return (
      <div className="">
        <h2>NO DATA AVAILABLE</h2>
        <p>PLEASE! ADD SOME POST</p>
        <Link to="/addPost">Add Post</Link>
      </div>
    );
  }
  return (
    <div>
      <p>this is Management post</p>
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
                        className="btn btn-primary"
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
  );
};

export default ManagementPost;
