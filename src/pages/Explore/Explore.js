import React from "react";
import styles from "./explore.module.css";
import data from "../../data/Explore.json";
import { Link } from "react-router-dom";
import img from "../../images/user-img.jpg";
import { BsArrowDown, BsArrowLeftCircleFill } from "react-icons/bs";

export default function Explore() {
  const { people } = data;
  return (
    <div className={styles.exploreContainer}>
      <Link to="/home">
        <BsArrowLeftCircleFill />
      </Link>
      <h6>People to follow</h6>
      <div className={styles.peopleContainer}>
        {people.map((item) => (
          <div className={styles.personDetails}>
            <div className="d-flex align-items-center">
              <img src={img} alt="" />
              <div className="mx-4 mt-3">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button className="btn-sm btn-primary">Follow</button>
          </div>
        ))}
        <button className={styles.showMore}>
          Show more people{" "}
          <span>
            <BsArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
}
