import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { isadmin } from "../api/Users";

console.log(await isadmin());
const IsAdmin = await isadmin();
const Header = () => {
  if (IsAdmin) {
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
          </ul>
        </nav>
      </header>
    );
  } else {
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
              <Link to="/loginu" className="button-link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;
