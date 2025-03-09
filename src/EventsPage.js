import React from "react";
import { Link } from "react-router-dom";
import eventsData from "./assets/eventsData";  // Import events data
import "./EventsPage.css";  // Import styling

const EventsPage = () => {
  return (
    <div className="events-container">
      <h1>All Events</h1>
      <p>Browse through all past and upcoming alumni events.</p>
      <div className="events-list">
        {eventsData.map((event) => (
          <Link key={event.id} to={`/event/${event.id}`} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
