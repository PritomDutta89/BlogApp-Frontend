/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import img1 from "../../assets/img-1.png";
import { useNavigate } from "react-router-dom";
import { fetchBlogList } from "../../services/Api";

const Blogs = () => {
  const [allList, setAllList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = async () => {
    const data = await fetchBlogList();
    setAllList(data?.data ? data?.data : []);
  };

  return (
    <>
      <div>
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-8 mt-4"
            onClick={() => navigate("/createPost")}
          >
            Create Post
          </button>
        </div>
        <div className="px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {allList.map((item, index) => (
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
                  onClick={() => navigate(`/viewBlog/${item._id}`)}
                  className="inline-flex  items-center justify-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3 ms-2 mt-1"
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
