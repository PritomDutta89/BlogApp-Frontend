/* eslint-disable no-unused-vars */
import Blogs from "./components/blogs/Blogs";
import CreatePost from "./components/blogs/CreatePost";
import EditPost from "./components/blogs/EditPost";
import ViewBlog from "./components/blogs/ViewBlog";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/viewBlog/:id" element={<ViewBlog />} />
        <Route path="/editPost/:id" element={<EditPost />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
