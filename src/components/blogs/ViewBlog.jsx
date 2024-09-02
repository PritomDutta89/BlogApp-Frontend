/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import img1 from "../../assets/img-1.png";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleBlog } from "../../services/Api";
import { Oval } from "react-loader-spinner";
import { formatDate } from "../../utilities/dateFormatter";
import DeleteBlog from "./DeleteBlog";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "react-query";

const ViewBlog = () => {
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Queries - get [for fetching the specific data] - getSingleBlogList
  const { isLoading, error, data } = useQuery(["getSingleBlogList", id], () =>
    fetchSingleBlog(id)
  );

  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        {isLoading ? (
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
              {data?.data?.title ? data?.data?.title : "-"}
            </p>
            <div className="mt-2 text-[#82858c] text-xs">
              <p>
                {data?.data?.createdAt
                  ? formatDate(data?.data?.createdAt)
                  : "-"}
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
                  data?.data?.imageURL
                    ? data?.data?.imageURL
                    : "https://cdn.pixabay.com/photo/2024/08/18/10/58/ai-generated-8977633_1280.png"
                }
                alt=""
                className="w-[45rem] h-[25rem] rounded-lg"
              />
            </div>

            <div className="md:px-6 mt-4">
              <p>{data?.data?.content ? data?.data?.content : "-"}</p>
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
