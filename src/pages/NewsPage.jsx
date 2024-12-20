import React from "react";
import "../components/ActivitiesPsage.css";
import image1 from '../assets/pictures/image1.jpeg';
import image2 from '../assets/pictures/image2.jpeg';
import image3 from '../assets/pictures/image3.jpeg';

const events = [
  {
    title: "Casablanca Business: What Business Skills Are Needed",
    time: "Today • 7:00 PM",
    location: "Casablanca",
    price: "$44.51",
    followers: "13.7k followers",
    image: image1, 
  },
  {
    title: "Checkmate & Connect: Chess and Networking",
    time: "Wednesday • 6:00 PM",
    location: "Commons Zerktouni",
    price: "$23.18",
    followers: "11 followers",
    image: image2,
  },
  {
    title: "Talent",
    time: "Friday • 10:00 PM",
    location: "EST",
    price: "From $2.18",
    followers: "31 followers",
    image: image3,
  },
];

function NewsPage() {
  return (
    <div className="activities-container">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.image} alt={event.title} className="event-image" />
          <div className="event-info">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-time">{event.time}</p>
            <p className="event-location">{event.location}</p>
            <p className="event-price">{event.price}</p>
            <p className="event-followers">{event.followers}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NewsPage;