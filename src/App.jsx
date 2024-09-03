/* eslint-disable no-unused-vars */
import { lazy, Suspense, useState } from "react";
// import Blogs from "./components/blogs/Blogs";
// import CreatePost from "./components/blogs/CreatePost";
// import EditPost from "./components/blogs/EditPost";
// import ViewBlog from "./components/blogs/ViewBlog";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import { DataProvider, useDataContext } from "./context/DataContext";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
import PrivateRoute from "./PrivateRoute";
import { QueryClient, QueryClientProvider } from "react-query";

// Lazy load components
const Blogs = lazy(() => import("./components/blogs/Blogs"));
const CreatePost = lazy(() => import("./components/blogs/CreatePost"));
const EditPost = lazy(() => import("./components/blogs/EditPost"));
const ViewBlog = lazy(() => import("./components/blogs/ViewBlog"));

const queryClient = new QueryClient();

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
          <Navbar setShowLogin={setShowLogin} />
          <Suspense fallback={<div className="flex justify-center items-center h-[20rem]">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Blogs />} />
              <Route
                path="/viewBlog/:id"
                element={<PrivateRoute element={ViewBlog} />}
              />
              <Route
                path="/editPost/:id"
                element={<PrivateRoute element={EditPost} />}
              />
              <Route
                path="/createPost"
                element={<PrivateRoute element={CreatePost} />}
              />
            </Routes>
          </Suspense>
          <Footer />
          {/* <ToastContainer /> */}
        </DataProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
