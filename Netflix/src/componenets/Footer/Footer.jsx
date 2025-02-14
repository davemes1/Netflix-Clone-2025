import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer_outer_container">
      <div >
        <p className="subscription_form">Restart your Membership </p>
      </div>
      <div className="inner_section_list">
        <div className="inner_lists">
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Invester Relations</a>
            </li>
            <li>
              <a href="">Buy Gifts Cards</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
          </ul>
        </div>
        <div className="inner_lists">
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <div className="inner_lists">
          <ul>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Netflix Shop</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">
                Do Not Sell or Share My Personal <br />
                Information
              </a>
            </li>
          </ul>
        </div>
        <div className="inner_lists">
          <ul>
            <li>
              <a href="">Media Center</a>
            </li>
            <li>
              <a href="">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">SPeed Test</a>
            </li>
            <li>
              <a href="">Ad Choices</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom_footer">
        <p>Service Code</p> <br />
        <p>{} 1997-2024 Netflix.Inc</p>
      </div>
    </div>
  );
}
