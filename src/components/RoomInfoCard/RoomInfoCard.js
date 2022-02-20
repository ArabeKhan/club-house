import React from "react";
import styles from "./RoomInfoCard.module.css";
import data from "../../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import img1 from "../../images/user-img.jpg";
import img2 from "../../images/user-img2.jpg";

export default function RoomInfoCard() {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <div className={styles.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2> {item.sub_title} </h2>
              <div className={styles.roomMembers}>
                <div>
                  <img src={img1} alt="Not_Found" />
                  <img src={img2} alt="Not_Found" />
                </div>
                <div>
                  {item.members.map((member) => (
                    <p>
                      {member.first_name} {member.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="mx-2">3.4</span>
                    <BsFillPersonFill />
                    <span className="mx-2"></span>
                    <span className="mx-2">2</span>
                    <BsChatDotsFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
