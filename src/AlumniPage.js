import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./AlumniPage.css";

// Import alumni images
import alumni1 from "./assets/alumni1.jpg";
import alumni2 from "./assets/alumni2.jpg";
import alumni3 from "./assets/alumni3.jpg";
import alumni4 from "./assets/alumni4.jpg";


// Static Alumni Data
const alumniData = [
  { id: 1, name: "Alice Johnson", role: "Software Engineer", batch: "2018-2022", image: alumni1 },
  { id: 2, name: "Bob Smith", role: "AI Researcher", batch: "2019-2023", image: alumni2 },
  { id: 3, name: "Clara Adams", role: "Cybersecurity Specialist", batch: "2020-2024", image: alumni3 },
  { id: 4, name: "David White", role: "Cloud Architect", batch: "2019-2023", image: alumni4 },
  { id: 5, name: "Emma Williams", role: "Data Scientist", batch: "2021-2025", image: alumni4 },
];

const AlumniPage = () => {
  // Handle search input
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const alumniCards = document.querySelectorAll(".alumni-card");
    
    alumniCards.forEach((card) => {
      const name = card.querySelector("h3").innerText.toLowerCase();
      card.style.display = name.includes(searchTerm) ? "block" : "none";
    });
  };

  // Handle batch selection
  const handleBatchSelect = (event) => {
    const selectedBatch = event.target.value;
    const alumniCards = document.querySelectorAll(".alumni-card");

    alumniCards.forEach((card) => {
      const batch = card.getAttribute("data-batch");
      card.style.display = batch === selectedBatch || selectedBatch === "all" ? "block" : "none";
    });
  };

  return (
    <div className="alumni-page">
      <h2>Computer Science Alumni</h2>
      <p>Explore notable alumni from the Computer Science & Engineering department.</p>

      {/* Search & Batch Selection */}
      <div className="search-batch-container">
        {/* Batch Selector */}
        <select className="batch-selector" onChange={handleBatchSelect}>
          <option value="all">All Batches</option>
          <option value="2018-2022">2018-2022</option>
          <option value="2019-2023">2019-2023</option>
          <option value="2020-2024">2020-2024</option>
          <option value="2021-2025">2021-2025</option>
        </select>

        {/* Search Bar */}
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search alumni..."
            onInput={handleSearch}
          />
        </div>
      </div>

      {/* Alumni Cards Grid */}
      <div className="alumni-grid">
        {alumniData.map((alumni) => (
          <div key={alumni.id} className="alumni-card" data-batch={alumni.batch}>
            <img src={alumni.image} alt={alumni.name} className="alumni-photo" />
            <h3>{alumni.name}</h3>
            <p>{alumni.role}</p>
            <span className="batch-year">{alumni.batch}</span>
          </div>
        ))}
      </div>

      <Link to="/" className="back-button">⬅ Back to Home</Link>
    </div>
  );
};

export default AlumniPage;










// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import './AlumniPage.css';

// // Import images from src/assets
// import alumni1 from "../assets/alumni1.jpeg";
// import alumni2 from "../assets/alumni2.jpeg";
// import alumni3 from "../assets/alumni3.jpeg";
// import alumni4 from "../assets/alumni4.jpeg";
// import alumni5 from "../assets/alumni5.jpeg";

// // Alumni Data with Imported Images
// const alumniData = {
//   "01": [
//     { id: 1, name: "Alice Johnson", role: "Research Scientist", image: alumni1 },
//     { id: 2, name: "Bob Smith", role: "Professor of Organic Chemistry", image: alumni2 },
//     { id: 3, name: "Clara Adams", role: "Art Historian", image: alumni3 },
//     { id: 4, name: "David White", role: "Author & Philosopher", image: alumni4 }
//   ],
//   "02": [
//     { id: 3, name: "Clara Adams", role: "Art Historian", image: alumni3 },
//     { id: 4, name: "David White", role: "Author & Philosopher", image: alumni4 },
//   ],
//   "03": [
//     { id: 5, name: "Emma Williams", role: "Neurosurgeon", image: alumni5 },
//   ],
// };

// // Department Names
// const departments = {
//   "01": "Computer Science & Engineering", 
//   "02": "Artificial Intelligence (CSE)",
//   "03": "Electronics & Communication",
//   "04": "Electrical & Electronics",
//   "05": "Mechanical",
//   "06": "Civil",
// };

// const generateBatchYears = () => {
//   const startYear = 2002;
//   const currentYear = new Date().getFullYear();
//   let batches = [];
//   for (let year = startYear; year <= currentYear; year++) {
//     batches.push(${year}-${year + 4});
//   }
//   return batches.reverse();
// };

// const AlumniPage = () => {
//   const { id } = useParams();
//   const departmentName = departments[id] || "Unknown Department";
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBatch, setSelectedBatch] = useState("2022-2026");

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleBatchChange = (e) => {
//     setSelectedBatch(e.target.value);
//   };

//   const alumniList = alumniData[id] || [];
//   const filteredAlumni = alumniList.filter((alumni) =>
//     alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="alumni-page">
//       <h2>Alumni from {departmentName}</h2>
//       <p>Explore notable alumni from the {departmentName} department.</p>

//       {/* Search Bar & Batch Selector */}
//       <div className="batch-container" style={{ position: 'absolute', top: '20px', left: '20px',right:'2000px'}}>
//         <label style={{ fontWeight: '500', marginRight: '5px' }}>Choose Batch:</label>
//         <select className="batch-selector" value={selectedBatch} onChange={handleBatchChange} style={{ color: '#777', fontWeight: '400' }}>
//           {generateBatchYears().map((batch) => (
//             <option key={batch} value={batch}>{batch}</option>
//           ))}
//         </select>
//       </div>
//       <div className="search-container" style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <div className="search-wrapper" style={{ display: 'flex', alignItems: 'center', border: '2px solid black', borderRadius: '25px', padding: '5px 15px', transition: '0.3s', cursor: 'pointer', fontSize: '14px' }}>
//           <FaSearch style={{ marginRight: '5px', color: 'black' }} />
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search alumni..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'black' }}
//           />
//         </div>
//       </div>

//       {/* Alumni Cards Grid */}
//       <div className="alumni-grid">
//         {filteredAlumni.map((alumni) => (
//           <div key={alumni.id} className="alumni-card">
//             <img src={alumni.image} alt={alumni.name} className="alumni-photo" />
//             <h3>{alumni.name}</h3>
//             <p>{alumni.role}</p>
//           </div>
//         ))}
//       </div>

//       <Link to="/" className="back-button">⬅ Back to Home</Link>
//     </div>
//   );
// };

// export default AlumniPage;



// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './AlumniPage.css'; // Add styling for this page

// // Fake Alumni Data (You can extend this)
// const alumniData = {
//   "01": [
//     { id: 1, name: "Alice Johnson", role: "Research Scientist", image: "/assets/alumni1.jpg" },
//     { id: 2, name: "Bob Smith", role: "Professor of Organic Chemistry", image: "/assets/alumni2.jpg" },
//   ],
//   "02": [
//     { id: 3, name: "Clara Adams", role: "Art Historian", image: "/assets/alumni3.jpg" },
//     { id: 4, name: "David White", role: "Author & Philosopher", image: "/assets/alumni4.jpg" },
//   ],
//   "03": [
//     { id: 5, name: "Emma Williams", role: "Neurosurgeon", image: "/assets/alumni5.jpg" },
//     { id: 6, name: "Frank Turner", role: "Medical Researcher", image: "/assets/alumni6.jpg" },
//   ],
//   "04": [
//     { id: 7, name: "Grace Miller", role: "Aerospace Engineer", image: "/assets/alumni7.jpg" },
//     { id: 8, name: "Henry Brown", role: "Software Architect", image: "/assets/alumni8.jpg" },
//   ],
//   "05": [
//     { id: 9, name: "Isabella Scott", role: "CEO of Fintech", image: "/assets/alumni9.jpg" },
//     { id: 10, name: "James Lee", role: "Marketing Director", image: "/assets/alumni10.jpg" },
//   ],
//   "06": [
//     { id: 11, name: "Karen Wilson", role: "Corporate Lawyer", image: "/assets/alumni11.jpg" },
//     { id: 12, name: "Liam Martinez", role: "Human Rights Activist", image: "/assets/alumni12.jpg" },
//   ],
// };

// const departments = {
//   "01": "Artificial Inteligence(CSE)",
//   "02": "Electronics & Communication",
//   "03": "Electrical & Electronics ",
//   "04": "Mechanical ",
//   "05": "Business Management",
//   "06": "Civil"
// };

// const AlumniPage = () => {
//   const { id } = useParams();
//   const departmentName = departments[id] || "Unknown Department";
//   const alumniList = alumniData[id] || [];

//   return (
//     <div className="alumni-page">
//       <h2>Alumni from {departmentName}</h2>
//       <p>Explore notable alumni from the {departmentName} department.</p>
      
//       {/* Alumni Cards Grid */}
//       <div className="alumni-grid">
//         {alumniList.map((alumni) => (
//           <div key={alumni.id} className="alumni-card">
//             <img src={alumni.image} alt={alumni.name} className="alumni-photo" />
//             <h3>{alumni.name}</h3>
//             <p>{alumni.role}</p>
//           </div>
//         ))}
//       </div>

//       <Link to="/" className="back-button">⬅ Back to Home</Link>
//     </div>
//   );
// };

// export default AlumniPage;






// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './AlumniPage.css';

// Import images from src/assets
// import alumni1 from './assets/alumni1.jpg';
// import alumni2 from './assets/alumni2.jpg';
// import alumni3 from './assets/alumni3.jpg';
// import alumni4 from './assets/alumni4.jpg';
// import alumni5 from './assets/alumni5.jpg';


// Alumni Data with Imported Images
// const alumniData = {
//   "01": [
//     { id: 1, name: "Alice Johnson", role: "Research Scientist", image: alumni1 },
//     { id: 2, name: "Bob Smith", role: "Professor of Organic Chemistry", image: alumni2 },
//     { id: 3, name: "Clara Adams", role: "Art Historian", image: alumni3 },
//     { id: 4, name: "David White", role: "Author & Philosopher", image: alumni4 }
//   ],
//   "02": [
//     { id: 3, name: "Clara Adams", role: "Art Historian", image: alumni3 },
//     { id: 4, name: "David White", role: "Author & Philosopher", image: alumni4 },
//   ],
//   "03": [
//     { id: 5, name: "Emma Williams", role: "Neurosurgeon", image: alumni5 },
//     // { id: 6, name: "Frank Turner", role: "Medical Researcher", image: alumni6 },
//   ],

// };

// // Department Names
// const departments = {
//  "01": "Computer Science & Engineering", 
//   "02": "Artificial Intelligence (CSE)",
//   "03": "Electronics & Communication",
//   "04": "Electrical & Electronics",
//   "05": "Mechanical",
//   "06": "Civil",
// };

// const AlumniPage = () => {
//   const { id } = useParams();
//   const departmentName = departments[id] || "Unknown Department";
//   const alumniList = alumniData[id] || [];

//   return (
//     <div className="alumni-page">
//       <h2>Alumni from {departmentName}</h2>
//       <p>Explore notable alumni from the {departmentName} department.</p>

//       {/* Alumni Cards Grid */}
//       <div className="alumni-grid">
//         {alumniList.map((alumni) => (
//           <div key={alumni.id} className="alumni-card">
//             <img src={alumni.image} alt={alumni.name} className="alumni-photo" />
//             <h3>{alumni.name}</h3>
//             <p>{alumni.role}</p>
//           </div>
//         ))}
//       </div>

//       <Link to="/" className="back-button">⬅ Back to Home</Link>
//     </div>
//   );
// };

// export default AlumniPage;
