import React from "react";
import "./NewsPage.css";
import newsData from "./assets/newsData";
import profilePic from "./assets/alumni3.jpg"; // Your profile picture

const NewsFeed = () => {
  return (
    <div className="news-container">
      {/* Left Sidebar - Profile Section */}
      <div className="left-sidebar">
        <div className="profile-card">
          <img src={profilePic} alt="Profile" className="profile-pic-large" />
          <h3 className="profile-name">Jess Williams</h3>
          <p className="profile-role">Senior Manager at Denali Bank</p>
          <div className="profile-stats">
            <p><strong>73</strong> Who's viewed your profile</p>
            <p><strong>35</strong> Views of your posts</p>
          </div>
        </div>
      </div>

      {/* Main News Feed */}
      <div className="news-feed">
        {newsData.map((post) => (
          <div key={post.id} className="news-card">
            <div className="news-header">
              <img src={post.profilePic} alt="Profile" className="profile-pic" />
              <div>
                <h3 className="profile-name">{post.profileName}</h3>
                <p className="post-time">{post.timestamp}</p>
              </div>
            </div>
            <p className="post-text">{post.postText}</p>
            {post.image && <img src={post.image} alt="Post" className="news-image" />}
            <div className="news-actions">
              <button>👍 Like</button>
              <button>💬 Comment</button>
              <button>🔄 Share</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar - Trending Articles */}
      <div className="right-sidebar">
        <div className="trending-news">
          <h3>What You Need to Know Now</h3>
          <ul>
            <li><a href="#">The Dow is About to Hit 20,000</a></li>
            <li><a href="#">What Today's Job Numbers Mean for You</a></li>
            <li><a href="#">How Healthcare Repeal Could Affect You</a></li>
            <li><a href="#">#ChaseGreat is Trending</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
