import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import img from "../../images/search.jpg";
import img2 from "../../images/mail.jpg";
import img3 from "../../images/alerm.png";
import img4 from "../../images/calender.jpg";
import img5 from "../../images/user.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/explore">
        <img src={img} alt="not" />
      </Link>
      <div className={styles.nav_items}>
        <Link to="/friends_invite">
          <img src={img2} alt="" />
        </Link>
        <Link to="/upcoming">
          <img src={img3} alt="" />
        </Link>
        <Link to="/activity">
          <img src={img4} alt="" />
        </Link>
        <Link to="/profile">
          <img src={img5} alt="" />
        </Link>
      </div>
    </div>
  );
}
