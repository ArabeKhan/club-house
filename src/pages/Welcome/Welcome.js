import React from "react";
import style from "./Welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome !</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Discover millions of rooms, filled with fascinating and unexpected
          conversations. Clubhouse is a thoughtful and generous place — where
          you bump into old friends and make new ones too.
        </p>
        <p>
          Drop into your favorite rooms while you’re commuting, walking your
          poodle or running in the park. Raise your hand if you’d like to chime
          in!
        </p>
        <p>
          We designed Clubhouse with the belief that people are at center of
          every moment.
        </p>
      </div>
      <div className={style.actionBtn}>
        <Link
          className="btn btn-primary d-flex align-items-center mb-3"
          to="/invite"
        >
          Get Your Username{" "}
        </Link>

        <Link to="/invite">Have a invite text ! Sign In</Link>
      </div>
    </div>
  );
}
