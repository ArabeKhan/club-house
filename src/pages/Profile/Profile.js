import React from "react";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";
import img from "../../images/arrow.png";
import img2 from "../../images/user-img.jpg";

export default function Profile() {
  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.header}>
          <div className={styles.head}>
            <Link to="/home">
              <img src={img} alt="" />
            </Link>
          </div>
          <div className={styles.actionBtn}>
            <BsAt />
            <Link to="/">
              <BsUpload />
            </Link>
            <AiOutlineSetting />
          </div>
        </div>
        <img src={img2} alt="" className={styles.profile_img} />
        <h4>Arabe Khan</h4>
        <p>Fornt-end Developer</p>
        <div className={styles.follow}>
          <p>
            <span>127</span> followers
          </p>
          <p>
            <span>0</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="my-3 ">
          <button>
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mx-4">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={styles.nominated}>
          <img src={img2} alt="" />
          <div>
            <p>Joined 25-Jan-2022</p>
            <p>
              Nominated by <span>Arabe Khan</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={styles.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
}
