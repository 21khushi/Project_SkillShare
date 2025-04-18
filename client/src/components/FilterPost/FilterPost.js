import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

const categories = ["Programming", "DSA", "Web Dev", "ML", "AI", "Projects", "React"];
const sortOptions = [
  { label: "Date: New to Old", value: "newest" },
  { label: "Date: Old to New", value: "oldest" },
  { label: "Most to Least Liked", value: "likes" },
];

const FilterPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filteredAndSortedPosts = posts
    .filter((post) => {
      const matchesCategory = category ? post.tags?.includes(category) : true;
      return matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === "likes") return (b.likes?.length || 0) - (a.likes?.length || 0);
      return 0;
    });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Posts</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
        >
          <option value="">📂 All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sorting Options */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
        >
          {sortOptions.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Display No Posts Message */}
      {filteredAndSortedPosts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">😕 No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAndSortedPosts.map((post) => (
            <div key={post._id} className="border rounded-lg p-4 shadow bg-white">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-1">{post.tags?.join(", ")}</p>
              <p className="text-gray-700 mb-3">{post.message?.slice(0, 120)}...</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>❤️ {post.likes?.length || 0} Likes</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterPost;
