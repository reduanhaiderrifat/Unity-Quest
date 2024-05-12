import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
const AddVholenteerPost = () => {
  const [deadline, setDeadlineDate] = useState(new Date());
  const { user } = useAuth();
  const userImage = user?.photoURL;
  const handlePost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;
    const category = form.category.value;
    const description = form.description.value;
    const number = parseInt(form.number.value);
    const Organaization_name = form.Organaization_name.value;
    const organizer_email = form.organizer_email.value;
    const postData = {
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
    };
    console.log(postData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL_SERVER}/post`,
        postData,
        { withCredentials: true }
      );
      if (response.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Post successfully add!",
          icon: "success",
        });
      }
      console.log(response.data);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handlePost}>
        <div className="grid grid-cols-1 lg:flex xl:flex items-center  p-4 bg-[#111827] gap-4">
          <div className=" lg:w-1/3 xl:w-1/3 text-center  text-white font-semibold space-y-4">
            <h2 className="text-xl">Information for volunteers</h2>
            <p className="text-lg">
              Volunteers, like you, are the unsung heroes of our communities.
              You are the ones who step forward, who raise your hands, and who
              say, "I will be the change I wish to see in the world."
            </p>
          </div>
          <div className="lg:w-2/3 xl:w-2/3">
            <div className=" grid grid-cols-1 md:flex  gap-2">
              <div className="form-control md:w-1/2 lg:w-1/2 xl:w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Post Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control md:w-1/2 lg:w-2/3 xl:w-2/3">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Thumbnail
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="thumbnailURL"
                  name="thumbnail"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className=" md:flex lg:flex xl:flex gap-6">
              <div className="md:w-1/3 lg:w-1/3 xl:w-1/3 space-y-5">
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
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label>
                    <span className="text-white font-semibold">Category</span>
                  </label>
                  <select
                    name="category"
                    id=""
                    className="input input-bordered select"
                  >
                    <option value="" disabled selected>
                      choose one
                    </option>
                    <option value="Healthcare"> Healthcare</option>
                    <option value="Education"> Education</option>
                    <option value="Social service"> Social service</option>
                    <option value="Animal welfare">Animal welfare</option>
                  </select>
                </div>
              </div>

              <div className="form-control md:w-2/3 lg:w-2/3 xl:w-2/3">
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
                  className="textarea textarea-bordered"
                  required
                ></textarea>
              </div>
            </div>
            <div className=" md:flex lg:flex xl:flex items-center gap-4">
              <div className="form-control md:w-2/5 lg:w-2/5 xl:w-2/5">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Number of volunteers
                  </span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="number"
                  className="input input-bordered w-full"
                  required
                />
              </div>{" "}
              <div className="form-control md:w-3/5 lg:w-3/5 xl:w-3/5">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Deadline
                  </span>
                </label>
                <ReactDatePicker
                  toggleCalendarOnIconClick
                  selected={deadline}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => setDeadlineDate(date)}
                  className="input input-bordered w-full"
                  showIcon
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#111827]">
          <div className="grid grid-cols-1 lg:flex xl:flex items-center gap-12 p-4 ">
            <div className="lg:w-1/3 xl:w-1/3 text-white text-center font-semibold space-y-4">
              <h2 className="text-xl ">Information of Organizer</h2>
              <p className="text-lg">
                In a world that often seems dark and divided, you stand as
                beacons of hope, shining your light brightly and igniting the
                flames of compassion wherever you go.
              </p>
            </div>

            <div className="grid grid-cols-1 md:flex lg:flex xl:flex w-full gap-2 ">
              <div className="form-control w-full lg:w-1/2 xl:w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Organizer name
                  </span>
                </label>
                <input
                  type="text"
                  name="Organaization_name"
                  placeholder="Organizer name"
                  className="input input-bordered  w-full cursor-no-drop"
                  value={user?.displayName}
                  readOnly
                />
              </div>

              <div className="form-control w-full lg:w-1/2 xl:w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Organizer email
                  </span>
                </label>
                <input
                  type="email"
                  name="organizer_email"
                  placeholder="organizer email "
                  className="input input-bordered w-full cursor-no-drop"
                  value={user?.email}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-end">
            <button className="btn w-full lg:w-3/5 xl:w-3/5  mb-4 lg:mr-10 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-green-500 text-white border-white text-lg">
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVholenteerPost;
