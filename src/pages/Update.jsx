import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});

  const [loader, sestLoading] = useState(true);
  const [deadline, setDeadlineDate] = useState(new Date());
  const { user } = useAuth();
  console.log(singleData);
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
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;
    const category = form.category.value;
    const description = form.description.value;
    const number = form.number.value;
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
    };
    console.log(postData);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL_SERVER}/update/${id}`,
        postData,
        { withCredentials: true }
      );
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: "Post update successfully !",
          icon: "success",
        });
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>this update page {id}</h2>
      <form onSubmit={handleUpdate}>
        <div className="flex items-center border p-4 bg-[#111827] gap-4">
          <div className="w-1/3 text-white font-semibold space-y-4">
            <h2 className="text-xl">Information for volunteers</h2>
            <p className="text-lg">
              Volunteers, like you, are the unsung heroes of our communities.
              You are the ones who step forward, who raise your hands, and who
              say, "I will be the change I wish to see in the world."
            </p>
          </div>
          <div className="w-2/3">
            <div className="flex  gap-2">
              <div className="form-control w-1/2">
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
                  defaultValue={singleData?.title}
                  required
                />
              </div>

              <div className="form-control w-1/2">
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
                  defaultValue={singleData?.thumbnail}
                  required
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-1/3 space-y-5">
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
                    defaultValue={singleData?.location}
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
                    defaultValue={singleData?.category}
                    required
                  >
                    <option value="" disabled>
                      choose one
                    </option>
                    <option value="Healthcare"> Healthcare</option>
                    <option value="Education"> Education</option>
                    <option value="Social service"> Social service</option>
                    <option value="Animal welfare">Animal welfare</option>
                  </select>
                </div>
              </div>

              <div className="form-control w-2/3">
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
                  defaultValue={singleData?.description}
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="form-control w-2/5">
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
                  defaultValue={singleData?.number}
                  required
                />
              </div>{" "}
              <div className="form-control w-3/5">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Deadline
                  </span>
                </label>

                <ReactDatePicker
                  selected={singleData?.deadline}
                  onChange={(date) => setDeadlineDate(date)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#111827]">
          <div className="flex items-center gap-12 p-4 ">
            <div className="w-1/3 text-white font-semibold space-y-4">
              <h2 className="text-xl ">Information of Organizer</h2>
              <p className="text-lg">
                In a world that often seems dark and divided, you stand as
                beacons of hope, shining your light brightly and igniting the
                flames of compassion wherever you go.
              </p>
            </div>

            <div className="flex w-full gap-2 mx-4">
              <div className="form-control w-1/2">
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

              <div className="form-control w-1/2">
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
            <button className="btn w-3/5  mb-4 mr-10 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-green-500 text-white border-white text-lg">
              Update Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
