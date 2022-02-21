import { createStandardAction, ActionType } from "typesafe-actions";

// 액션 타입 선언
const NEXT = "image/NEXT";
const BEFORE = "image/BEFORE";
const INIT = "image/INIT";
const SELECT = "image/SELECT";
// 액션 생성함수 선언

export const next = createStandardAction(NEXT)();

export const before = createStandardAction(BEFORE)();

export const init = createStandardAction(INIT)<string[]>();

export const select = createStandardAction(SELECT)<number>();

// 액션 객체에 대한 타입
const actions = { next, before, init, select };
type ImageAction = ActionType<typeof actions>;

// 리덕스 state 의 타입
type ImageState = {
  imageUrls: string[];
  nowImageIndex: number;
};

const initialImage: ImageState = {
  imageUrls: [],
  nowImageIndex: 0,
};

// 리듀서
function imageReducer(
  state: ImageState = initialImage,
  action: ImageAction
): ImageState {
  switch (action.type) {
    case INIT:
      return { ...state, imageUrls: action.payload };
    case NEXT:
      return { ...state, nowImageIndex: state.nowImageIndex + 1 };
    case BEFORE:
      return { ...state, nowImageIndex: state.nowImageIndex - 1 };
    case SELECT:
      return { ...state, nowImageIndex: action.payload };
    default:
      return state;
  }
}

export default imageReducer;
