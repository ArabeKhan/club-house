import React from "react";
import styles from "../PhoneConfirmation/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function CodeConfirm() {
  return (
    <div className={styles.PhoneConfirmConatiner}>
      <Link to="/invite" className="btn btn-primary mb-5">
        <AiOutlineArrowLeft /> Back
      </Link>
      <div className="text-center">
        <h1 className="w-70 mb-4">Enter the code</h1>
        <input className="form-control" type="text" name="" id="" />
        <p className="mt-2">
          Didn't recive your code ? <span>Tap to resend</span>
        </p>
        <Link className="mt-4 btn " to="/allow_notification">
          Next
        </Link>
      </div>
    </div>
  );
}
