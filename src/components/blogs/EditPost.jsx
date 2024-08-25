/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchSingleBlog, updateBlogPost } from "../../services/Api";
import { Oval } from "react-loader-spinner";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSingleBlogList();
  }, [id]);

  const getSingleBlogList = async () => {
    setLoading(true);
    const data = await fetchSingleBlog(id);
    setTitle(data?.data?.title ? data?.data?.title : "");
    setImgUrl(data?.data?.imageURL ? data?.data?.imageURL : "");
    setDescription(data?.data?.content ? data?.data?.content : "");
    setLoading(false);
  };

  const deletePost = async (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      content: description,
      imageURL: imgUrl,
    };

    const data = await updateBlogPost(id, postData);

    if (data) {
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
    } else {
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
    }
  };

  return (
    <div>
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
        <form className="px-[2rem] mt-14" onSubmit={deletePost}>
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm py-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Upload Image URL
              </label>
              <input
                type="text"
                id="website"
                className="bg-gray-50 py-[0.8rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Upload Image URL"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
