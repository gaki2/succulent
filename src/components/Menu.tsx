import "../css/landingPage.css";
import { Link } from "react-router-dom";
import { titleimges, menues, ErrorCheck } from "../setup";

const Menu = () => {
  ErrorCheck();
  function getImagePath() {
    const paths = [];
    for (let i = 0; i < titleimges.length; i++) {
      const path = `img/${titleimges[i]}.jpeg`;
      paths.push(path);
    }
    return paths;
  }
  const paths = getImagePath();

  function makeImgElements(paths: string[]): JSX.Element[] {
    const elements = [];

    for (let i = 0; i < paths.length; i++) {
      const path: string = paths[i];

      const element = <img src={path} className={`img_${i + 1}`}></img>;
      elements.push(element);
    }
    return elements;
  }
  const imageElements = makeImgElements(paths);

  function makeListElements() {
    const elements: JSX.Element[] = [];

    for (let i = 0; i < menues.length; i++) {
      const name: string = menues[i].name;
      const element: JSX.Element = (
        <li className="content_li" id={`list_${i + 1}`}>
          <Link to={`/img/${menues[i].name}`}>
            <span className="nameList">{name}</span>
          </Link>
        </li>
      );
      elements.push(element);
    }
    return elements;
  }

  const lists = makeListElements();

  return (
    <div className="content">
      <ul className="content_ul">
        {lists}
        <div className="imagebox">{imageElements}</div>
      </ul>
    </div>
  );
};

export default Menu;
