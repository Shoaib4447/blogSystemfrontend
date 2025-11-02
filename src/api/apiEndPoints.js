import axiosInstance from "./axiosInstance";

// user1@gmail.com
// Ab2345678

const authAPI = {
  signUp: (signUpFormData) =>
    axiosInstance.post("/auth/register", signUpFormData),
  Login: (logInFormData) => axiosInstance.post("/auth/login", logInFormData),
};

const heathChechAPI = {
  heathCheck: axiosInstance.get("/heathCheck"),
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

export { heathChechAPI, authAPI, blogAPI };
