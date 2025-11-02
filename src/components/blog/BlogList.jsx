import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { allBlogs } from "../../rtk/slices/blogSlice";

const BlogList = () => {
  const count = useSelector((state) => state.counter.value);
  console.log("Count=>", count);
  const dispatch = useDispatch();

  return <div>BlogList</div>;
};

export default BlogList;
