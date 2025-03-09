import React from "react";
import { Link } from "react-router-dom";
import mentorshipData from "./assets/MentorshipData";  // Import mentorship data
import "./MentorshipPage.css";

const MentorshipPage = () => {
  return (
    <div className="mentorship-container">
      <h1>Alumni Mentorship Programs</h1>
      <p>Explore various mentorship opportunities and learn from alumni leaders.</p>
      <div className="mentorship-list">
        {mentorshipData.map((mentorship) => (
          <Link key={mentorship.id} to={`/mentorship/${mentorship.id}`} className="mentorship-card">
            <h2>{mentorship.title}</h2>
            <p>{mentorship.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MentorshipPage;
