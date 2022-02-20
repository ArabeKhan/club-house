import React from "react";
import styles from "./dailyInfoCard.module.css";
import data from "../../data/dailyCard.json";

export default function DailyInfoCard() {
  return (
    <div className={styles.dailyCard}>
      {data.map((item) => (
        <div className={styles.daily}>
          <span>{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
