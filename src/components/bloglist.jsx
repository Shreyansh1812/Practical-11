import React from 'react';
import { Link } from 'react-router-dom';
import './styles/bloglist.css'; // Make sure to create this CSS file
const BlogList = () => {
  // Sample blog data (in a real app, this would come from an API)
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first component...",
      author: "John Doe",
      date: "March 28, 2025",
      imageUrl: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      title: "CSS Grid Layout",
      excerpt: "Master CSS Grid Layout with these practical examples and tips...",
      author: "Jane Smith",
      date: "March 25, 2025",
      imageUrl: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      excerpt: "Explore the powerful features introduced in ES6 and how to use them...",
      author: "Mike Johnson",
      date: "March 20, 2025",
      imageUrl: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div className="blog-list-container">
      <h1 className="page-title">Latest Blog Posts</h1>
      
      <div className="blog-filters">
        <select className="filter-dropdown">
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
          <option value="trending">Trending</option>
        </select>
        <input type="text" placeholder="Search blogs..." className="search-input" />
      </div>
      
      <div className="blogs-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-author">By {blog.author}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <Link to={`/blog/${blog.id}`} className="read-more-link">Read More</Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pagination">
        <button className="pagination-button">Previous</button>
        <span className="page-indicator">Page 1 of 5</span>
        <button className="pagination-button">Next</button>
      </div>
    </div>
  );
};

export default BlogList;