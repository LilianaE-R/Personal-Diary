import React from "react";

const Header = ({ onPreviousClick, onNextClick, onCurrentClick }) => {
  //Rendering the header with the navigation coming from Home.jsx
  return (
    <div>
      <ul className="header">
        <li>
          <button className="btn btn-outline m-4" onClick={onPreviousClick}>
            Previous Entry
          </button>
        </li>
        <li>
          <button className="btn btn-outline m-4" onClick={onCurrentClick}>
            Current
          </button>
        </li>
        <li>
          <button className="btn btn-outline m-4" onClick={onNextClick}>
            Next Entry
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
