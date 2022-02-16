import React from "react";
import "../css/landingPage.css";

const Menu = () => {
  function getImagePath() {
    const imges = ["spring", "아메치스", "summer2", "autum", "winter", "winter2", "spring2"];
    const paths = [];
    for (let i = 0; i < imges.length; i++) {
      const path = `img/${imges[i]}.jpeg`;
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

  const names = ["Spring", "Monsoon", "Summer", "Autumn", "Late Autumn", "Winter", "Late Winter"];

  function makeListElements() {
    const elements: JSX.Element[] = [];

    for (let i = 0; i < names.length; i++) {
      const name: string = names[i];
      const element: JSX.Element = (
        <li className="content_li" id={`list_${i + 1}`}>
          <span className="nameList">{name}</span>
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
