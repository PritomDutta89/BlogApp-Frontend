import axios from "axios";
import { BASE_URL } from "./helper";

export const fetchBlogList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/posts`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createBlogPost = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/posts`, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleBlog = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/posts/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteBlogPost = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/posts/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateBlogPost = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/api/posts/${id}`, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export async function LoginApi(data) {
  try {
    const url = `${BASE_URL}/api/user/login`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function RegisterApi(data) {
  try {
    const url = `${BASE_URL}/api/user/register`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getImgUrlAPI(data) {
  try {
    const url = import.meta.env.VITE_IMG_URL;
    const res = await axios.post(url, data);

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
