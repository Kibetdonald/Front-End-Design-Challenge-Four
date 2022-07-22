import React from "react";
import './Navbar.scss';
import logo from '../../assets/images/logo.svg'

export default function Navbar() {
  return (
    <header>
      <div class="container">
        <a href="#" class="logo">
          <img src={logo} alt="Logo" />
        </a>

        <div class="navbar-wrapper">
          <button class="navbar-menu-btn" data-navbar-toggle-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <nav class="navbar" data-navbar>
            <ul class="navbar-list">
              <li class="nav-item">
                <a href="#home" class="nav-link">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a href="#about" class="nav-link">
                  What we do
                </a>
              </li>

              <li class="nav-item">
                <a href="#features" class="nav-link">
                  Why us?
                </a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  How is works
                </a>
              </li>

              <li class="nav-item">
                <a href="#contact" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>

            <button class="btn btn-primary">Get in touch</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
