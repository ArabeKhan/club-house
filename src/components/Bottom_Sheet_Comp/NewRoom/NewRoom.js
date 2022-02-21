/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./newRoom.module.css";
import img from "../../../images/arrow.png";
import img2 from "../../../images/user-img.jpg";
import img3 from "../../../images/hand-peace.png";
import img4 from "../../../images/stopHandIcon.png";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const card = props.cardDetail;
  return (
    <>
      <div className={styles.roomDetailsContainer}>
        <div className={styles.head}>
          <div className="d-flex align-items-center">
            <a href="#" onClick={() => props.setSheetVisible(false)}>
              <img src={img} alt="no" className={styles.arrow_icon} />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img src={img2} alt="" className={styles.profile_img} />
          </div>
        </div>

        <div className={styles.roomDetailsCard}>
          <div
            className="d-flex align-items-center justify-content-between flex-warp"
            style={{ padding: ".5em 1em" }}
          >
            {card.members.map((item) => (
              <div className={styles.memberContainer}>
                {micMuteVisible ? (
                  <div className={styles.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <img src={img2} alt="" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <button
            onClick={() => {
              props.setSheetVisible(false);
            }}
          >
            <img src={img3} alt="" />
            Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src={img4} alt="" />
            </button>
            <button
              onClick={() => {
                setMicMuteVisible(!micMuteVisible);
              }}
            >
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
