import React from "react";

import "./Homepage.scss";

import Hero from "./Hero/Hero";
import Memories from "./Memories/Memories";
import Reviews from "./Reviews/Reviews";
import Touch from "./Touch/Touch";

export default function Homepage() {
  return (
    <div className="homepage">
      <Hero />
      <Memories />
      <Touch />
      <Reviews />
    </div>
  );
}
