/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchSingleBlog, updateBlogPost } from "../../services/Api";
import { Oval } from "react-loader-spinner";
import { useMutation } from "react-query";
import { useQuery } from "react-query";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Queries - get [for fetching the specific data] - getSingleBlogList
  const { isLoading, error, data } = useQuery(
    ["getSingleBlogList", id],
    () => fetchSingleBlog(id),
    {
      onSuccess: (data) => {
        setTitle(data?.data?.title ? data?.data?.title : "");
        setImgUrl(data?.data?.imageURL ? data?.data?.imageURL : "");
        setDescription(data?.data?.content ? data?.data?.content : "");
      },
    }
  );

  // for edit post
  const editPost = useMutation(updateBlogPost, {
    onSuccess: () => {
      toast.success("Post updated successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTitle("");
      setImgUrl("");
      setDescription("");

      setTimeout(() => {
        navigate(-1);
      }, 1000);
    },
    onError: () => {
      toast.error("Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const handleEditPost = async (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      content: description,
      imageURL: imgUrl,
    };

    // editPost.mutate(id, postData); //not work - only accept 1 argument - follow below method
    editPost.mutate({ id, data: postData }); // Pass a single object with id and postData
  };

  if (error)
    return (
      <div className="flex justify-center items-center h-[24rem]">
        Error loading posts
      </div>
    );

  return (
    <div>
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
        <form className="px-[2rem] mt-14" onSubmit={handleEditPost}>
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Title
              </label>
              <input
                type="text"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm py-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Upload Image URL
              </label>
              <input
                type="text"
                id="website"
                className="bg-gray-50 py-[0.8rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Upload Image URL"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Write your thoughts here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default EditPost;
