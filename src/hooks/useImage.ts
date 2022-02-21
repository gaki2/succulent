import { useSelector } from "react-redux";
import { RootState } from "../redux/index";

export const useImage = () => {
  const { imageUrls, nowImageIndex } = useSelector(
    (state: RootState) => state.imageReducer
  );
  return { imageUrls, nowImageIndex };
};
