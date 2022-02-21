import styles from "../css/imageMenu.module.css";
import { useImage } from "../hooks/useImage";
import { useDispatch } from "react-redux";
import { select } from "../redux/image";
import { useState, useEffect } from "react";

export default function ImageMenu() {
  const dispatch = useDispatch();
  const { imageUrls, nowImageIndex } = useImage();

  function makeImageElements(): JSX.Element[] {
    const imageElements = [];
    for (let i = 0; i < imageUrls.length; i++) {
      const selectAction = select(i);
      const url = imageUrls[i];
      const element = (
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${url})`,
          }}
          id={i == nowImageIndex ? styles.selected : ""}
          onClick={() => dispatch(selectAction)}
        ></div>
      );
      imageElements.push(element);
    }
    return imageElements;
  }

  const imageElements = makeImageElements();

  return <div className={styles.wrapper}>{imageElements}</div>;
}
