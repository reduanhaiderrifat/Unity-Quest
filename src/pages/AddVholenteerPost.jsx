import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const AddVholenteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handlePost = (e) => {
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
      startDate,
      number,
      Organaization_name,
      organizer_email,
    };
    console.log(postData);
  };
  return (
    <div>
      <form onSubmit={handlePost}>
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
                  placeholder="Thumbnail"
                  name="thumbnail"
                  className="input input-bordered w-full"
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
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
                  required
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
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-end">
            <button className="btn w-3/5 btn-primary mb-4 mr-10">
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVholenteerPost;
