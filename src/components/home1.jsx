import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home1.css';

const Home1 = () => {
  return (
    <div className="home1-container">
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Explore & Share Ideas</h1>
          <p>A platform for creators, thinkers, and enthusiasts</p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <img src="https://via.placeholder.com/150" alt="Content" className="info-image" />
          <h2>Quality Content</h2>
          <p>Curated articles from expert contributors</p>
        </div>
        <div className="info-card">
          <img src="https://via.placeholder.com/150" alt="Community" className="info-image" />
          <h2>Active Community</h2>
          <p>Join discussions and share your perspective</p>
        </div>
        <div className="info-card">
          <img src="https://via.placeholder.com/150" alt="Updates" className="info-image" />
          <h2>Regular Updates</h2>
          <p>Fresh content delivered weekly</p>
        </div>
      </div>

      <div className="testimonial-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p className="quote">"This platform has completely changed how I discover new ideas and connect with others."</p>
          <p className="author">— Sarah Johnson, Designer</p>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Join?</h2>
        <p>Create an account today and start exploring</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button primary">Sign Up</Link>
          <Link to="/blogs" className="cta-button secondary">Browse Blogs</Link>
        </div>
      </div>
    </div>
  );
};

export default Home1;