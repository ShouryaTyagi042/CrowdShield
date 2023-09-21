import React from "react";
import "../assets/css/Home.css";
import bgImage from "../assets/images/bg_image.jpg";

function Home() {
  return (
    <div className="bg-sky-900">
      <div className="background bg-sky-900">
        <img className="bg_image" src={bgImage}></img>
        <p>SMART INDIA HACKATHON</p>
      </div>
    </div>
  );
}

export default Home;
