import React from "react";
import { useParams } from "react-router-dom";
import assets from "./assets/assets";
import "./EventDetails.css";

const eventsData = [
  {
    id: "1",
    title: "Annual Alumni Reunion",
    sponsor: "Alumni Association",
    date: "Saturday, June 15, 2025",
    time: "6pm - 10pm",
    location: "Grand Hall, Stanford University",
    image: assets.eventImage1,
    details: `A grand gathering to relive old times and strengthen lifelong bonds. This event will feature speeches, networking opportunities, and a dinner party.`,
    speaker: {
      name: "Dr. John Doe",
      bio: "Dr. John is a renowned academic and mentor who has guided many successful alumni.",
      image: assets.speakerImage, // Ensure this exists in assets
    },
  },
  {
    id: "2",
    title: "Networking Meet-Up",
    sponsor: "Career Services",
    date: "Thursday, July 20, 2025",
    time: "4pm - 7pm",
    location: "Innovation Hub, Stanford",
    image: assets.travelImage2,
    details: `Expand your professional connections with fellow alumni from diverse fields. This event includes panel discussions and informal networking sessions.`,
    speaker: {
      name: "Ms. Jane Smith",
      bio: "Jane is a successful entrepreneur and alumni, currently running a tech startup.",
      image: assets.speakerImage2,
    },
  },
  {
    id: "3",
    title: "Homecoming Celebration",
    sponsor: "University Administration",
    date: "Friday, September 10, 2025",
    time: "10am - 5pm",
    location: "Main Campus, Stanford",
    image: assets.travelImage3,
    details: `Return to your alma mater and cherish the nostalgia with classmates. Experience campus tours, music, and an exclusive Q&A session with faculty.`,
    speaker: {
      name: "Prof. Richard Roe",
      bio: "Prof. Roe has been a mentor to many and has made significant contributions to alumni relations.",
      image: assets.speakerImage3,
    },
  },
];

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    return <h2>Event Not Found</h2>;
  }

  return (
    <div className="event-container">
      <header className="event-header">
        <h1>{event.title}</h1>
        <p>Sponsored by <strong>{event.sponsor}</strong></p>
      </header>

      <div className="event-content">
        <div className="event-left">
          <img src={event.image} alt={event.title} className="event-img" />
          <div className="event-info">
            <p><strong>📅 Date:</strong> {event.date}</p>
            <p><strong>⏰ Time:</strong> {event.time}</p>
            <p><strong>📍 Location:</strong> {event.location}</p>
            <p><strong>📅 Add to Calendar:</strong> Google | Outlook | Apple</p>
          </div>
        </div>

        <div className="event-right">
          <h2>Event Details:</h2>
          <p>{event.details}</p>
            <br/>
          <h3>About the Speaker</h3>
          <div className="speaker-details">
            <img src={event.speaker.image} alt={event.speaker.name} className="speaker-img" />
            <div>
              <h4>{event.speaker.name}</h4>
              <p>{event.speaker.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
