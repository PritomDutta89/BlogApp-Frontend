/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import img1 from "../../assets/img-1.png";
import { useNavigate } from "react-router-dom";
import { fetchBlogList } from "../../services/Api";
import { Oval } from "react-loader-spinner";
import { useDataContext } from "../../context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blogs = () => {
  const [allList, setAllList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const { token, setToken } = useDataContext();
  const navigate = useNavigate(); 

  useEffect(() => {
    getBlogList();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filterData = allList.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(filterData);
    } else {
      setFilteredBlogs(allList);
    }
  }, [allList, searchQuery]);

  const getBlogList = async () => {
    setLoading(true);
    const data = await fetchBlogList();
    setAllList(data?.data ? data?.data : []);
    setFilteredBlogs(data?.data ? data?.data : []);
    setLoading(false);
  };

  const createPost = () => {
    if (token) {
      navigate("/createPost");
    } else {
      toast.warn("Please login.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const readMore = (id) => {
    if (token) {
      navigate(`/viewBlog/${id}`);
    } else {
      toast.warn("Please login.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
          <div className="relative md:ml-8">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                // aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 ps-10 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none focus:ring-[#6947BF] focus:border-[#6947BF] "
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 md:me-8"
            onClick={createPost}
          >
            Create Post
          </button>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[20rem]">
            <Oval
              visible={true}
              height="80"
              width="50"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredBlogs.map((item, index) => (
              <div
                key={index}
                className=" bg-white h-[34rem] overflow-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-lg w-full h-[20rem]"
                  src={
                    item?.imageURL
                      ? item?.imageURL
                      : "https://cdn.pixabay.com/photo/2024/08/18/10/58/ai-generated-8977633_1280.png"
                  }
                  alt="icon"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item?.title ? item?.title.substring(0, 50) : "-"}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item?.cardSummary
                      ? item?.cardSummary.substring(0, 105)
                      : "-"}
                  </p>

                  <button
                    onClick={() => readMore(item._id)}
                    className="inline-flex  items-center justify-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3 ms-2 mt-1"
                      // aria-hidden="true"
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
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="h-[20rem] flex justify-center items-center">
            No post found
          </p>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Blogs;
