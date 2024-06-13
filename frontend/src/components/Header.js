import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h3 className="title">DG - Digital Courses</h3>
        <ul>
          <li>
            <Link to="/" className="button-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-courses" className="button-link">
              My Courses
            </Link>
          </li>
          <li>
            <Link to="/create-course" className="button-link">
              Create
            </Link>
          </li>
          <li>
            <Link to="/loginu" className="button-link">
              Login
            </Link>
          </li>
          {/* <li>
            <Link to="/signup" className="button-link">
              SignUp
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
