import React from "react";
import styles from "../PhoneConfirmation/phoneConfirm.module.css";
import { Link } from "react-router-dom";

export default function AllowNotificaions() {
  return (
    <div className={styles.PhoneConfirmConatiner}>
      <div className="text-center">
        <h1 className="mb-4">Last important step!</h1>
        <p className="mb-3 m-auto">
          Enable notifications to know when people are talking..
        </p>
        <div className={styles.notificationContainer}>
          <div className="p-3">
            <h3>Clubhouse Would Like to Send You Notifications..</h3>
            <p>Notifivations may include alerts, sounds, and icons badges</p>
          </div>
          <div className={styles.action_btn}>
            <Link to="/">Don't Allow</Link>
            <Link to="/home">Allow</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
