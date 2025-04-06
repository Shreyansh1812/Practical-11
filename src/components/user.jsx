import React from "react";
import { useParams, Link } from "react-router-dom";
import "./styles/user.css"; // Make sure to create this CSS file

const User = () => {
    const { id } = useParams();
    
    // Mock user data (in a real app, this would come from an API)
    const user = {
        id: id,
        name: "Alex Johnson",
        username: "alexj",
        avatar: "https://randomuser.me/api/portraits/men/" + id + ".jpg",
        role: "Frontend Developer",
        location: "San Francisco, CA",
        joinDate: "April 2023",
        bio: "Passionate web developer with 5+ years of experience in creating responsive and user-friendly interfaces. Loves coffee, hiking, and open source projects.",
        stats: {
            posts: 47,
            followers: 8543,
            following: 251,
            likes: 3200
        },
        skills: ["JavaScript", "React", "CSS", "Node.js", "UI/UX Design"],
        recentActivity: [
            { id: 1, type: "post", title: "How I Built My Latest Project with React", date: "2 days ago" },
            { id: 2, type: "comment", title: "Commented on 'CSS Grid vs Flexbox'", date: "5 days ago" },
            { id: 3, type: "like", title: "Liked 'JavaScript Best Practices'", date: "1 week ago" }
        ],
        socialLinks: {
            twitter: "twitter.com/alexj",
            github: "github.com/alexjohnson",
            linkedin: "linkedin.com/in/alexjohnson"
        }
    };

    return (
        <div className="user-profile-container">
            <div className="profile-header">
                <div className="profile-cover-image"></div>
                <div className="profile-header-content">
                    <div className="profile-avatar">
                        <img src={user.avatar} alt={`${user.name}'s avatar`} />
                    </div>
                    <div className="profile-info">
                        <h1>{user.name}</h1>
                        <p className="username">@{user.username}</p>
                        <p className="role">{user.role}</p>
                        <div className="location-info">
                            <span><i className="fa fa-map-marker"></i> {user.location}</span>
                            <span><i className="fa fa-calendar"></i> Joined {user.joinDate}</span>
                        </div>
                    </div>
                    <div className="profile-actions">
                        <button className="btn primary">Follow</button>
                        <button className="btn secondary">Message</button>
                    </div>
                </div>
            </div>

            <div className="profile-body">
                <div className="profile-stats">
                    <div className="stat-item">
                        <span className="stat-value">{user.stats.posts}</span>
                        <span className="stat-label">Posts</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{user.stats.followers}</span>
                        <span className="stat-label">Followers</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{user.stats.following}</span>
                        <span className="stat-label">Following</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{user.stats.likes}</span>
                        <span className="stat-label">Likes</span>
                    </div>
                </div>

                <div className="profile-content">
                    <div className="profile-about">
                        <h2>About</h2>
                        <p>{user.bio}</p>
                        
                        <h3>Skills</h3>
                        <div className="skills-list">
                            {user.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="profile-activity">
                        <h2>Recent Activity</h2>
                        <ul className="activity-list">
                            {user.recentActivity.map(activity => (
                                <li key={activity.id} className={`activity-item ${activity.type}`}>
                                    <div className="activity-icon"></div>
                                    <div className="activity-details">
                                        <p className="activity-title">{activity.title}</p>
                                        <p className="activity-date">{activity.date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Link to={`/user/${id}/activity`} className="view-all-link">View all activity</Link>
                    </div>
                </div>

                <div className="profile-sidebar">
                    <div className="contact-info">
                        <h3>Connect</h3>
                        <ul className="social-links">
                            <li><a href={`https://${user.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i> Twitter</a></li>
                            <li><a href={`https://${user.socialLinks.github}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> GitHub</a></li>
                            <li><a href={`https://${user.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;