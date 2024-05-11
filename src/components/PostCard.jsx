import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { thumbnail, title, deadline, category, location, _id } = post;
  return (
    <div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={thumbnail} alt="" />
        </a>
        <div className="p-5">
          <div className="flex justify-between">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {category}
            </h5>
            <div className="tooltip tooltip-bottom" data-tip="Deadline">
              <button className="text-black text-lg">
                <p>{deadline.split("T")[0]}</p>
              </button>
            </div>
          </div>
          <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
            <strong> Title</strong> : {title}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-3">
            <span className=" font-bold  text-xl"> Location:</span>
            <span className="flex items-center gap-1 text-blue-500 cursor-pointer">
              <ImLocation2 /> {location}
            </span>
          </p>
          <Link
            to={`/volunteerDetails/${_id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Veiw Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
