import React, { useState } from "react";
import styles from "../BottomSheet/BottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";
import { IoMdArrowDroprightCircle } from "react-icons/io";

export default function StartRoom({ setSheetCreateRoom, setSheetVisible }) {
  const [room, setRoom] = useState("open");
  return (
    <>
      <div className={styles.switch_line}></div>
      <div className={styles.topic_btn}>
        <button className={styles.addTopicBtn}>Add a topic</button>
      </div>
      <div className={styles.selectRomm}>
        <button
          className={room === "open" ? styles.active : ""}
          onClick={() => setRoom("open")}
        >
          <div>
            <FcGlobe />
          </div>
          Open
        </button>

        <button
          className={room === "social" ? styles.active : ""}
          onClick={() => setRoom("social")}
        >
          <div>
            <FcGlobe />
          </div>
          Social
        </button>

        <button
          className={room === "closed" ? styles.active : ""}
          onClick={() => setRoom("closed")}
        >
          <div>
            <FcGlobe />
          </div>
          Closed
        </button>
      </div>
      <p>
        Start a room{" "}
        <span>
          {room === "closed"
            ? "For everyone I choose"
            : room === "social"
            ? "with people I follow"
            : "open to everyone"}
        </span>
      </p>
      <div className="text-center">
        <button
          className={styles.letGoBtn}
          onClick={() => {
            setSheetCreateRoom(true);
            setSheetVisible(true);
          }}
        >
          <IoMdArrowDroprightCircle />
          LET'S GO
        </button>
      </div>
    </>
  );
}
