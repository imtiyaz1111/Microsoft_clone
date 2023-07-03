import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUserCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navigation container">
        <div className="navbar-brand">
          <img src="/logo.png" alt="" />
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/microsoft365">
                    Microsoft 365{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/windows">
                    Windows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/surface">
                    Surface
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/xbox">
                    Xbox
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="navbar-brands">
          <img src="/logo.png" alt="" />
        </div>
        <div className="navicon">
          <FontAwesomeIcon
            className="me-3 icon"
            icon={faSearch}
          ></FontAwesomeIcon>
      <FontAwesomeIcon className="me-3 icon" icon={faCartShopping} ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="me-3 icon"
            icon={faUserCircle}
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
};

export default Navbar;
