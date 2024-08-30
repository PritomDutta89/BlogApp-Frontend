/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createBlogPost, getImgUrlAPI } from "../../services/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [cardSummary, setCardSummary] = useState("");
  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      content: description,
      cardSummary: cardSummary,
      imageURL: imageUrl,
    };
    const data = await createBlogPost(postData);

    if (data) {
      toast.success("Post created successfully!", {
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
      setImageUrl("");
      setDescription("");
      setCardSummary("");

      setTimeout(() => {
        navigate("/");
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

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "hunger-img"); // Replace 'your_upload_preset' with the actual name of your preset

    const data = await getImgUrlAPI(formData);
    setImageUrl(
      data?.url
        ? data?.url
        : "https://www.istockphoto.com/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-gm1457979959-492655950?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ffood%2F&utm_term=food"
    );
  };

  return (
    <div>
      <form className="px-[2rem] mt-5" onSubmit={createPost}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 ">
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm py-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Upload Image URL<span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="website"
              className="bg-gray-50 py-[0.8rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleImageUpload}
              placeholder="Upload Image URL"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Card Summary (Up to 100 Characters)
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            value={cardSummary}
            onChange={(e) =>
              e.target.value.length <= 100 && setCardSummary(e.target.value)
            }
            required
          ></textarea>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {cardSummary.length}/100
          </p>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreatePost;
