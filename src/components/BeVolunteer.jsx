import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BeVolunteer = () => {
  const [singleData, setSingleData] = useState({});
  const [loader, sestLoading] = useState(true);

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
    const number = form.number.value;
    const Organaization_name = form.Organaization_name.value;
    const organizer_email = form.organizer_email.value;
    const postData = {
      title,
      thumbnail,
      location,
      description,
      suggestion,
      status,
      category,
      deadline,
      number,
      Organaization_name,
      organizer_email,
    };
    console.log(postData);
  };
  return (
    <div>
      <form onSubmit={handleRequest}>
        <div className="flex items-center border p-4 bg-[#111827] gap-4">
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
                  className="input input-bordered w-full cursor-no-drop"
                  value={title}
                  readOnly
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
                  className="input input-bordered w-full cursor-no-drop"
                  value={thumbnail}
                  readOnly
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
                  className="textarea textarea-bordered cursor-no-drop"
                  value={description}
                  readOnly
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
                  className="input input-bordered w-full cursor-no-drop"
                  value={number}
                  readOnly
                />
              </div>{" "}
              <div className="form-control w-3/5">
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
          <div className=" space-y-8">
            <div className="">
              <label>
                <span className=" text-white font-semibold text-lg">
                  Suggestion
                </span>
              </label>
              <textarea
                name="suggestion"
                id=""
                cols="45"
                rows="8"
                className=" rounded-lg"
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
                  value={Organaization_name}
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
