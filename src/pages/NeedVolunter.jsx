import { useEffect, useState } from "react";
import { IoTabletLandscape } from "react-icons/io5";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostCard from "../components/PostCard";
import { Link, useLoaderData } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import toast from "react-hot-toast";
import { FaAnglesDown } from "react-icons/fa6";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import axios from "axios";
const NeedVolunter = () => {
  const [posts, setAllPost] = useState([]);
  const [loader, setLoader] = useState(true);
  const titles = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [totals, setTotals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(6);
  const counts = totals?.count || 0;

  const numberOfPages = Math.ceil(counts / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get("/postsCount");
      setTotals(data);
    };
    getData();
  }, [axiosSecure]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(
        `/allPost?page=${currentPage}&size=${itemsPerPage}`
      );
      setAllPost(data);
      setLoader(false);
    };
    getData();
  }, [axiosSecure, itemsPerPage, currentPage]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search) {
      axios
        .get(`${import.meta.env.VITE_URL_SERVER}/titlePost?search=${search}`)
        .then((res) => {
          setAllPost(res.data);
        });
    } else {
      const getData = async () => {
        const { data } = await axiosSecure.get(
          `/allPost?page=${currentPage}&size=${itemsPerPage}`
        );
        setAllPost(data);
      };
      getData();
    }
  }, [search, currentPage, itemsPerPage, axiosSecure]);
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy text to clipboard!");
    }
  };
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(0);
  };
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <Helmet>
        <title>UnityQuest-Need-Volunteer</title>
      </Helmet>
      <div className="min-h-[calc(100vh-230px)] bg-base-100">
        <div className="flex justify-center w-full">
          <div className="border-b-4 border-green-600 p-2 mt-2 rounded-full w-full md:w-2/3 lg:w-1/3">
            <label className="flex items-center">
              <input
                onChange={handleSearch}
                className="input rounded-full w-full"
                type="text"
                name="search"
                placeholder="search by post title..."
              />
              <button className="button">
                <FcSearch size={45} />
              </button>
            </label>
          </div>
        </div>
        <div className="w-full">
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              className="m-1 btn bg-blue-700 text-white hover:bg-blue-800"
            >
              Titles clue for search <FaAnglesDown />
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow-md overflow-y-scroll h-96 menu dropdown-content z-50 bg-white text-black rounded-md w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {titles?.map((post) => (
                <li key={post._id} className="mb-3 border-b-2 border-gray-200">
                  <div className="flex items-center justify-between">
                    <span>{post?.title}</span>
                    <button
                      onClick={() => copyText(post?.title)}
                      className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Copy
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Tabs>
          <div className="flex justify-end">
            <TabList>
              <Tab>
                <div className="tooltip" data-tip="Card">
                  <button>
                    <RiLayoutGrid2Fill size={35} />
                  </button>
                </div>
              </Tab>
              <Tab>
                <div className="tooltip" data-tip="Table">
                  <button>
                    <IoTabletLandscape size={35} />
                  </button>
                </div>
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            {loader ? (
              <div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : posts?.length === 0 ? (
              <div className="min-h-[calc(100vh-230px)] flex flex-col justify-center items-center">
                <h2 className="text-5xl font-semibold">
                  <i>OOPS!!!</i>
                </h2>
                <p className="text-3xl font-semibold">
                  <i>NO DATA AVAILABLE</i>
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
                {posts?.map((post, idx) => (
                  <PostCard key={post._id} idx={idx} post={post} />
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loader ? (
              <div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                {posts?.length === 0 ? (
                  <div className="min-h-[calc(100vh-330px)] flex flex-col justify-center items-center">
                    <h2 className="text-5xl font-semibold">
                      <i>OOPS!!!</i>
                    </h2>
                    <p className="text-3xl font-semibold">
                      <i>NO DATA AVAILABLE</i>
                    </p>
                  </div>
                ) : (
                  <table className="table">
                    <thead>
                      <tr className="bg-gradient-to-r from-cyan-600 to-green-500 text-white text-lg">
                        <th></th>
                        <th>Category</th>
                        <th>Post Title</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>View Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts?.map((post, idx) => (
                        <tr key={post._id}>
                          <th>{idx + 1}</th>
                          <td>{post?.category}</td>
                          <td>{post?.title}</td>
                          <td>{post?.location}</td>
                          <td>{post?.number}</td>
                          <td>
                            <Link
                              to={`/volunteerDetails/${post._id}`}
                              className="btn w-2/3 my-2 bg-gradient-to-r from-cyan-500 to-green-500 text-white text-lg"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </TabPanel>
        </Tabs>
        <div className="flex justify-center my-4">
          <button
            onClick={handlePrevious}
            className="btn mr-2 active:bg-orange-500 active:text-white"
          >
            Previous
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page
                  ? "btn mr-4 hover:bg-orange-600 bg-orange-600 text-white"
                  : "btn mr-4"
              }
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            className="btn mr-2 active:bg-orange-500 active:text-white"
          >
            Next
          </button>
          <select
            defaultValue={itemsPerPage}
            onChange={handleItemsPerPage}
            className="input input-bordered select"
          >
            <option value="6">6</option>
            <option value="9">9</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default NeedVolunter;
