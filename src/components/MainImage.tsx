import styles from "../css/imagePage.module.css";
import { useImage } from "../hooks/useImage";
import { useDispatch } from "react-redux";
import { next, before } from "../redux/image";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainImage() {
  const dispatch = useDispatch();
  const [openfull, setOpenFull] = useState(false);
  const navigate = useNavigate();
  const { imageUrls, nowImageIndex } = useImage();

  const clickNext = () => {
    return (e: React.MouseEvent) => {
      if (imageUrls.length - 1 > nowImageIndex) {
        const action = next();
        dispatch(action);
      }
      e.preventDefault();
    };
  };
  const clickBefore = () => {
    return (e: React.MouseEvent) => {
      if (nowImageIndex > 0) {
        const action = before();
        dispatch(action);
      }
      e.preventDefault();
    };
  };
  const showFullBox = () => {
    return (e: React.MouseEvent) => {
      setOpenFull(true);
      e.preventDefault();
    };
  };
  const closeFullBox = () => {
    return (e: React.MouseEvent) => {
      if (!openfull) {
        navigate("/");
      } else {
        setOpenFull(false);
      }
      e.preventDefault();
    };
  };
  return (
    <>
      <div className={styles.main_img_wrapper}>
        <div
          onClick={showFullBox()}
          className={styles.main_img}
          style={{ backgroundImage: `url(${imageUrls[nowImageIndex]})` }}
        ></div>
      </div>
      <div
        id={openfull ? "" : styles.hidden}
        className={styles.full_img_wrapper}
        onClick={closeFullBox()}
        style={{ backgroundImage: `url(${imageUrls[nowImageIndex]})` }}
      ></div>
      <button onClick={clickBefore()} className={styles.before_btn}>
        <svg className={styles.before_click} viewBox="0 -11 32 24">
          <path
            d="M7.98 0.119999L13.2 5.38H0.78V6.68H13.26L7.98 12H9.78L15.7 6.06L9.78 0.119999H7.98Z"
            fill="#151515"
          ></path>
        </svg>
      </button>
      <button onClick={clickNext()} className={styles.next_btn}>
        <svg viewBox="0 0 32 24">
          <path
            d="M7.98 0.119999L13.2 5.38H0.78V6.68H13.26L7.98 12H9.78L15.7 6.06L9.78 0.119999H7.98Z"
            fill="#151515"
          ></path>
        </svg>
      </button>
      <button onClick={closeFullBox()} className={styles.back_btn}>
        <svg width="73" height="18" viewBox="0 0 73 18">
          <path
            d="M1 9H72M1 9L9.1697 1M1 9L9.1697 17"
            stroke="currentColor"
          ></path>
        </svg>
      </button>
      <span className={styles.home_text}>home</span>
    </>
  );
}
