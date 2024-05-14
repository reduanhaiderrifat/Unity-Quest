import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
const BeVolunteer = () => {
  const [singleData, setSingleData] = useState({});
  const { user } = useAuth();
  const email = user?.email;
  const [loader, sestLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {
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

  const handleRequest = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;
    const category = form.category.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;
    const description = form.description.value;
    const number = parseInt(form.number.value);
    const username = form.username.value;
    const useremail = form.useremail.value;
    const requestData = {
      title,
      thumbnail,
      location,
      description,
      suggestion,
      status,
      category,
      deadline,
      number,
      username,
      email,
      useremail,
      id,
    };
    try {
      const response = await axiosSecure.post(`/request`, requestData);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Requset successfully sent!",
          icon: "success",
        });
      }
      //update number of volunteer
      await axiosSecure.patch(`/requestUpdate/${id}`, number);
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    }
  };
  return (
    <div>
      <Helmet>
        <title>UnityQuest-Apply-Request</title>
      </Helmet>
      <form onSubmit={handleRequest}>
        <div className="grid grid-cols-1 lg:flex items-center border p-4 bg-[#111827] gap-4">
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 xl:flex  gap-2">
              <div className="form-control xl:w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Post Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  className="input input-bordered w-full cursor-no-drop"
                  value={title}
                  readOnly
                />
              </div>

              <div className="form-control xl:w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Thumbnail
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="thumbnailURL"
                  name="thumbnail"
                  className="input input-bordered w-full cursor-no-drop"
                  value={thumbnail}
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-1 xl:flex gap-6">
              <div className="xl:w-1/3 space-y-5">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-white font-semibold">
                      Location
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="location"
                    name="location"
                    className="input input-bordered cursor-no-drop"
                    value={location}
                    readOnly
                  />
                </div>
                <div className="form-control ">
                  <label>
                    <span className="text-white font-semibold">Category</span>
                  </label>
                  <input
                    type="text"
                    placeholder="category"
                    name="category"
                    className="input input-bordered cursor-no-drop"
                    value={category}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-control xl:w-2/3">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Description
                  </span>
                </label>
                <textarea
                  rows={4}
                  cols={10}
                  type="text"
                  placeholder="description"
                  name="description"
                  className="textarea textarea-bordered cursor-no-drop"
                  value={description}
                  readOnly
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 md:flex items-center gap-4">
              <div className="form-control md:w-2/5">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Number of volunteers
                  </span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="number"
                  className="input input-bordered w-full cursor-no-drop"
                  value={number}
                  readOnly
                />
              </div>{" "}
              <div className="form-control md:w-3/5">
                <label className="label">
                  <span className="label-text text-white font-semibold ">
                    Deadline
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="deadline"
                  name="deadline"
                  className="input input-bordered w-full cursor-no-drop"
                  value={deadline?.split("T")[0]}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 space-y-8">
            <div className="form-control lg:3/4 xl:w-full">
              <label>
                <span className=" text-white font-semibold text-lg">
                  Suggestion (only 250 words)
                </span>
              </label>
              <textarea
                name="suggestion"
                id=""
                cols="45"
                rows="8"
                maxLength="250"
                className=" rounded-lg"
                placeholder="text..."
              ></textarea>
            </div>
            <div className="">
              <label>
                <span className=" text-white font-semibold text-lg">
                  Status
                </span>
              </label>
              <br />
              <select name="status" id="">
                <option value="requested">Requested</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-[#111827]">
          <div className="flex items-center gap-12 p-4 ">
            <div className="grid grid-cols-1 md:flex w-full gap-2 mx-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Organizer name"
                  className="input input-bordered  w-full cursor-no-drop"
                  value={Organaization_name}
                  readOnly
                />
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="useremail"
                  placeholder="organizer email "
                  className="input input-bordered w-full cursor-no-drop"
                  value={organizer_email}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <button className="btn w-2/3  my-8  bg-transparent hover:bg-gradient-to-r from-cyan-500 to-green-500 text-white border-white text-lg">
              Request
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BeVolunteer;
