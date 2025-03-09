import React from "react";
import { useParams } from "react-router-dom";
import mentorshipData from "./assets/MentorshipData";
import "./MentorshipDetails.css";

const MentorshipDetails = () => {
  const { id } = useParams();
  const mentorship = mentorshipData.find((m) => m.id === id);

  if (!mentorship) {
    return <h2 className="not-found">Mentorship Program Not Found</h2>;
  }

  return (
    <div className="mentorship-details">
      <div className="mentorship-banner">
        <img src={mentorship.image} alt={mentorship.title} />
        <h1>{mentorship.title}</h1>
      </div>

      <div className="mentorship-content">
        <p className="description">{mentorship.description}</p>

        <h2>Key Highlights</h2>
        <ul>
          {mentorship.highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h2>Eligibility & Application Process</h2>
        <p>{mentorship.application}</p>

        <h2>Contact Information</h2>
        <p>{mentorship.contact}</p>
      </div>
    </div>
  );
};

export default MentorshipDetails;
