import React, { useContext } from "react";
import styles from "./UserFrom.module.css";
import AuthContext from "../contexts/AuthContext";

export default function UserForm() {
  const authCtx = useContext(AuthContext);
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  };
  return (
    <form className={styles.formGroup} onSubmit={handleSubmitLogin}>
      <div className={styles.inputBox}>
        <label htmlFor="name" className={styles["inputBox-label"]}>
          Name
        </label>
        <input type="text" name="name" />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="email" className={styles["inputBox-label"]}>
          E-mail
        </label>
        <input type="text" name="email" />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="phone" className={styles["inputBox-label"]}>
          Phone Number
        </label>
        <input type="text" name="phone" />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="avatar" className={styles["inputBox-label"]}>
          Your avatar
        </label>
        <input type="file" name="avatar" />
      </div>
      <button type="submit" className={styles.buttonSubmit}>
        Save
      </button>
    </form>
  );
}
