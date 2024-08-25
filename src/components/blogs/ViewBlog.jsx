/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import img1 from "../../assets/img-1.png";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleBlog } from "../../services/Api";
import { Oval } from "react-loader-spinner";
import { formatDate } from "../../utilities/dateFormatter";
import DeleteBlog from "./DeleteBlog";
import { ToastContainer, toast } from "react-toastify";

const ViewBlog = () => {
  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(true);
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleBlogList();
  }, [id]);

  const getSingleBlogList = async () => {
    setLoading(true);
    const data = await fetchSingleBlog(id);
    console.log(data?.data);
    setBlogData(data?.data ? data?.data : {});
    setLoading(false);
  };

  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        {loading ? (
          <div className="flex justify-center items-center h-[24rem]">
            <Oval
              visible={true}
              height="50"
              width="80"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="w-[70%] md:w-[50%] flex flex-col justify-center items-center">
            <p className="text-[#1E2026] text-[1.7rem] font-bold md:px-6">
              {blogData?.title ? blogData?.title : "-"}
            </p>
            <div className="mt-2 text-[#82858c] text-xs">
              <p>
                {blogData?.createdAt ? formatDate(blogData?.createdAt) : "-"}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center md:flex-row md:gap-2">
              <button
                type="button"
                className="text-white w-[7rem] bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                onClick={() => navigate(`/editPost/${id}`)}
              >
                Edit Post
              </button>

              <button
                type="button"
                className="text-white w-[7rem] bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                onClick={() => setToggleDeleteModal(true)}
              >
                Delete Post
              </button>
            </div>

            <div className="mt-4">
              <img
                src={
                  blogData?.imageURL
                    ? blogData?.imageURL
                    : "https://cdn.pixabay.com/photo/2024/08/18/10/58/ai-generated-8977633_1280.png"
                }
                alt=""
                className="w-[45rem] h-[25rem] rounded-lg"
              />
            </div>

            <div className="md:px-6 mt-4">
              <p>{blogData?.content ? blogData?.content : "-"}</p>
            </div>
          </div>
        )}

        {toggleDeleteModal && (
          <DeleteBlog
            toggleDeleteModal={toggleDeleteModal}
            setToggleDeleteModal={setToggleDeleteModal}
            id={id}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default ViewBlog;
