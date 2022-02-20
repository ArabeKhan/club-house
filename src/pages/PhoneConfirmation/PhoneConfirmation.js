import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./phoneConfirm.module.css";

export default function PhoneConfirmation() {
  const [value, setValue] = useState("");

  return (
    <div className={styles.PhoneConfirmConatiner}>
      <Link to="/" className="btn btn-primary mb-5">
        <AiOutlineArrowLeft /> Back
      </Link>
      <h1 className="mb-2">Enter Your Phone</h1>
      <PhoneInput
        value={value}
        defaultCountry="BD"
        international
        onChange={setValue}
      />
      <p className="mt-4">
        By entering your number, you're agreeing our
        <span> Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
      <Link className="mt-4 btn " to="/code_confirm">
        Next
      </Link>
    </div>
  );
}
