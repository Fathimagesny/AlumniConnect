import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaSearch, FaBell, FaComment, FaTimes } from "react-icons/fa";
import styles from "./EngagePage.module.css"; // Importing as module

const alumniData = {
  1: { id: 1, name: "John Doe", mutual: 5, image: "https://via.placeholder.com/50" },
  2: { id: 2, name: "Jane Smith", mutual: 8, image: "https://via.placeholder.com/50" },
  3: { id: 3, name: "Michael Scott", mutual: 10, image: "https://via.placeholder.com/50" },
  4: { id: 4, name: "Pam Beesly", mutual: 15, image: "https://via.placeholder.com/50" },
};

const EngagePage = () => {
  const { alumniId } = useParams(); // Get alumni ID from URL
  const alumni = alumniId ? alumniData[alumniId] : null; // Check if alumniId exists

  return (
    <div className={styles.engagePage}>
      {/* Navbar */}
      <div className={styles.navbar}>
        <h1 className={styles.navbarTitle}>AlumniConnect</h1>
        <div className={styles.searchBar}>
          <FaSearch className={styles.icon} />
          <input type="text" placeholder="Search people..." />
        </div>
        <div className={styles.notifications}>
          <FaBell className={styles.icon} />
        </div>
      </div>

      {/* If alumniId is provided, show profile, else show message */}
      <div className={styles.container}>
        {alumni ? (
          <div className={styles.friendCard}>
            <img src={alumni.image} alt={alumni.name} className={styles.profilePic} />
            <div className={styles.friendDetails}>
              <span className={styles.friendName}>{alumni.name}</span>
              <span className={styles.mutualFriends}>{alumni.mutual} mutual friends</span>
            </div>
            <div className={styles.friendActions}>
              <button className={styles.messageBtn}>
                <FaComment /> Message
              </button>
              <button className={styles.removeBtn}>
                <FaTimes /> Remove
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2>Select an alumni to engage with:</h2>
            <ul>
              <li><Link to="/engage/1">John Doe</Link></li>
              <li><Link to="/engage/2">Jane Smith</Link></li>
              <li><Link to="/engage/3">Michael Scott</Link></li>
              <li><Link to="/engage/4">Pam Beesly</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EngagePage;
