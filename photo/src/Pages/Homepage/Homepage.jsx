import React from "react";

import "./Homepage.scss";

import Hero from "./Hero/Hero";
import Memories from "./Memories/Memories";
import Reviews from "./Reviews/Reviews";

export default function Homepage() {
  return (
    <div className="homepage">
      <Hero />
      <Memories />
      <Reviews />
    </div>
  );
}
