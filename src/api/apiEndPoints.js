import axiosInstance from "./axiosInstance";

const authAPI = {
  signUp: (signUpFormData) =>
    axiosInstance.post("/auth/register", signUpFormData),
  signUp: (logInFormData) =>
    axiosInstance.post("/auth/register", logInFormData),
};

const blogAPI = {
  createBlog: (createBlogFormData) =>
    axiosInstance.post("/blogs/createBlog", createBlogFormData),
  getAllBlogs: () => axiosInstance.get("/blogs/getAllBlogs"),
  getSingleBlog: (id) => axiosInstance.get(`/blogs/getSingleBlog/${id}`),
  updateBlog: (id, updateBlogFormData) =>
    axiosInstance.put(`/blogs/updateBlog/${id}`, updateBlogFormData),
  deleteBlog: (id) => axiosInstance.delete(`/blogs/deleteBlog/${id}`),
};

export { authAPI, blogAPI };
