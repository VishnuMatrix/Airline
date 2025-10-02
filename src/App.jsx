// src/App.jsx - Fixed (removed duplicate BookingForm)
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import DestinationCard from "./components/DestinationCard/DestinationCard";
import Footer from "./components/Footer/Footer";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import "./App.css";
import parisImage from "./assets/paris.jpeg";
import tokyoImage from "./assets/tokyo.jpeg";
import newYorkImage from "./assets/new-york.jpeg";
import backgroundVideo from "./assets/travel-background.mp4";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: parisImage,
    description: "Discover the city of love and its timeless art.",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: tokyoImage,
    description: "Immerse yourself in a vibrant, futuristic metropolis.",
  },
  {
    id: 3,
    name: "New York, USA",
    image: newYorkImage,
    description: "Experience the iconic skyline and endless energy.",
  },
];

function App() {
  return (
    <div className="app">
      <Header />

      {/* Video background for Hero section - Hero already contains BookingForm */}
      <VideoBackground videoSrc={backgroundVideo}>
        <Hero />
      </VideoBackground>

      {/* Destinations section */}
      <section className="destinations-section">
        <div className="destinations-container">
          <h2 className="destinations-heading">
            Explore Our Exclusive Destinations
          </h2>
          <div className="destination-cards-grid">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                name={destination.name}
                image={destination.image}
                description={destination.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
