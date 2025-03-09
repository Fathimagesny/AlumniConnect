import alumni1 from "./alumni1.jpg";
import alumni2 from "./alumni2.jpg";
import alumni3 from "./alumni3.jpg";
import alumni4 from "./alumni4.jpg";
import news2 from "./new1.jpg";
import news3 from "./news2.jpeg";
import news4 from "./news2.jpeg";

const newsData = [
  {
    id: 1,
    profileName: "Student Council",
    profilePic: alumni1, // Imported image
    postText:
      "Annual College Fest Announced! Join us for an exciting week of fun, competitions, and performances.",
    image: news2, // Imported image
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    profileName: "Dr. Ayesha Kapoor",
    profilePic: alumni2,
    postText: "Our college introduces an advanced AI research facility for students.",
    image: news2,
    timestamp: "Yesterday at 5:30 PM",
  },
  {
    id: 3,
    profileName: "Sports Club",
    profilePic: alumni4,
    postText: "Our team secured first place in the inter-college football tournament! 🏆",
    image: news3,
    timestamp: "March 2 at 11:00 AM",
  },
  {
    id: 4,
    profileName: "Placement Cell",
    profilePic: alumni3,
    postText: "Over 300 students received job offers in top companies. Congratulations to all! 🎉",
    image: news4,
    timestamp: "March 1 at 4:45 PM",
  },
];

export default newsData;
