import axios from "axios";

export const fetchBlogList = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/posts`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createBlogPost = async (data) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/posts`, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleBlog = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteBlogPost = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/posts/${id}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateBlogPost = async (id, data) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/posts/${id}`,
      data
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export async function LoginApi(data) {
  try {
    const url = `http://localhost:5000/api/user/login`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function RegisterApi(data) {
  try {
    const url = `http://localhost:5000/api/user/register`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}
