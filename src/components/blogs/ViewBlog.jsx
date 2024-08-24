/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../assets/img-1.png";
import { useNavigate } from "react-router-dom";

const ViewBlog = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <p className="text-[#1E2026] text-[1.7rem] font-bold px-6">
            Why should I use Flashcards for revision?
          </p>
          <div className="mt-2 text-[#82858c] text-xs">
            <p>12 days ago</p>
          </div>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
            onClick={() => navigate("/editPost")}
          >
            Edit Post
          </button>

          <div className="mt-4">
            <img src={img1} alt="" className="w-[45rem] h-[25rem] rounded-lg" />
          </div>

          <div className="px-6 mt-4">
            <p>
              There are several steps in the revision process when it comes to
              preparing for your exams. First, you need to understand the basics
              of each subject’s content; keywords, dates, quotes and equations.
              The next step is building on your knowledge and applying it to
              answer increasingly more difficult questions, gradually adding
              more complex knowledge and understanding before eventually
              completing practice exam papers. The most important step is the
              first, getting to grips with the basic building blocks of your
              subject, and using flashcards is a great way to achieve this. A
              flashcard has information on both sides; usually a keyword or
              question on one and the corresponding definition or answer on the
              other. Flashcards are a great resource to practice active recall,
              a memorisation technique aimed at improving the retrieval of
              information stored in our brains.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
