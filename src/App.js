import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from "./assets/logo.png";
import heroBackground from "./assets/hq720.jpg";
import eventImage1 from "./assets/travel1.jpg";
import eventImage2 from "./assets/travel2.jpg";
import eventImage3 from "./assets/travel3.jpg";
//import mentorshipImage1 from "./assets/story1.jpg'";
//import mentorshipImage2 from "./assets/story2.jpg'";
import AlumniPage from './AlumniPage';
import EventDetails from "./EventDetails";
import NewsPage from './NewsPage';
import EventsPage from "./EventsPage";
import MentorshipPage from "./MentorshipPage";
import MentorshipDetails from './MentorshipDetails';
import EngagePage from './EngagePage';
import Login from './Login';

const Home = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Stanford Logo" className="logo" />
        </div>
        <div className="nav-right">
          <div className="nav-top">
            <button className="search-button">Search 🔍</button>
            <Link to="/login" className="login-button">Login / Register</Link>
          </div>
          <ul className="nav-menu">
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/news">News</Link></li>
            <li>Volunteer</li>
            <li><Link to="/engage">Engage</Link></li>
            <li>Profile</li>
            <li>About</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-overlay">
          <h1>AlumniConnect – Bridging Past and Future!</h1>
          <p>Reconnect, reminisce, and explore the incredible journeys of our alumni. Discover mentorship opportunities, career insights, and lifelong connections. Whether you're here to find old friends or seek professional guidance, this is your gateway to a thriving alumni community!</p>
          {/* <button className="cta-button">Reunion Home</button> */}
        </div>
      </header>

      {/* Departments Section */}
      <section className="departments-section">
  <h2>Meet Our Alumni</h2>
  <p>Explore alumni from Computer Science & Engineering</p>
  <div className="department-cards">
    <Link to="/alumni/01" className="department-card">
      <span className="dept-id">01</span>
      <h3>Computer Science & Engineering</h3>
    </Link>
  </div>
</section>


      {/* Events Section */}
      <section className="events-section">
        <h2>Alumni Events: Relive, Reunite, Reignite!</h2>
        <p>Celebrate memories, reconnect with old friends, and create new ones.</p>
        <div className="events-cards">
          {[
            { id: "1", img: eventImage1, title: "Annual Alumni Reunion", desc: "A grand gathering to relive old times and strengthen lifelong bonds." },
            { id: "2", img: eventImage2, title: "Networking Meet-Up", desc: "Expand your professional connections with fellow alumni from diverse fields." },
            { id: "3", img: eventImage3, title: "Homecoming Celebration", desc: "Return to your alma mater and cherish the nostalgia with classmates." }
          ].map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} className="card">
              <img src={event.img} alt={event.title} />
              <div className="card-content">
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      

<section className="stories-section">
  <h2>Mentorship Matters: Learn from Alumni Leaders</h2>
  <p>Guidance, support, and career insights from experienced alumni mentors</p>
  <div className="story-cards">
    {[
      { id: "1", title: "Career Guidance Program", desc: "Get one-on-one mentorship from alumni in your field of interest." },
      { id: "2", title: "Startup & Entrepreneurship Hub", desc: "Connect with successful alumni entrepreneurs and industry experts." },
      { id: "3", title: "Alumni-Led Workshops", desc: "Join interactive sessions on leadership, networking, and career growth." }
    ].map((story) => (
      <Link key={story.id} to={`/mentorship/${story.id}`} className="story-card red-card">
        <h3>{story.title}</h3>
        <p>{story.desc}</p>
      </Link>
    ))}
  </div>
</section>


      {/* Sliding Gallery Section */}
      <section className="sliding-gallery">
        <div className="gallery-container">
          <div className="gallery-track">
            {["1.webp", "2.webp", "3.webp", "4.avif", "1.webp", "2.webp", "3.webp"].map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={require(`./assets/${img}`)} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <input type="email" placeholder="Enter your email" />
          <label>
            <input type="checkbox" /> Yes, subscribe me.
          </label>
          <button>Subscribe</button>
        </div>

        <div className="footer-links">
          <div>
            <h4>Menu</h4>
            <ul>
              <li>Home</li>
              <li>Faculties</li>
              <li>Research</li>
              <li>Apply & Enroll</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Monday - Thursday: 8:00 AM - 10:00 PM</p>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
          </div>
          <div>
            <h4>Policies</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>
        </div>

        <div className="social-icons">
          <span>🔗 Instagram</span>
          <span>🔗 Facebook</span>
          <span>🔗 Twitter</span>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumni/:id" element={<AlumniPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/events" element={<EventsPage />} /> 
        <Route path="/news" element={<NewsPage />} />
        <Route path="/mentorship" element={<MentorshipPage />} /> 
        <Route path="/mentorship/:id"element={<MentorshipDetails/>}></Route>
        <Route path="/events"element={<EngagePage/>}></Route>
        <Route path="/engage/:alumniId" element={<EngagePage />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
