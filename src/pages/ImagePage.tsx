import styles from "../css/imagePage.module.css";
import MainImage from "../components/MainImage";
import { useDispatch } from "react-redux";
import { init } from "../redux/image";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { menues } from "../setup";
import ImageMenu from "../components/ImageMenu";

export default function ImagePage() {
  // 리덕스에 이미지 url 정보 등록
  const dispatch = useDispatch();
  const category = useParams().category;
  let imageLen = 0;
  let multifly = 0;
  for (let i = 0; i < menues.length; i++) {
    if (menues[i].name == category) {
      imageLen = menues[i].imgNum;
      multifly = i;
    }
  }

  const imageUrls = [];
  for (let i = 0; i < imageLen; i++) {
    const url = `/img/${category}/${i + 1 + 20 * multifly}.jpeg`;
    imageUrls.push(url);
  }

  const initAction = init(imageUrls);
  useEffect(() => {
    dispatch(initAction);
  }, []);

  return (
    <div className={styles.wrapper}>
      <MainImage></MainImage>
      <ImageMenu></ImageMenu>
    </div>
  );
}
