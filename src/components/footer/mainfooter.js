import React, { Component } from "react";

class MainFooter extends Component {
  render() {
    return (
      <footer class="mdl-mega-footer">
        <div class="mdl-mega-footer__top-section">
          <div class="mdl-mega-footer__left-section">
            <button class="mdl-mega-footer__social-btn" />
            <button class="mdl-mega-footer__social-btn" />
            <button class="mdl-mega-footer__social-btn" />
          </div>
          <div class="mdl-mega-footer__right-section">
            <p> info@loudspeakerdigital.com</p>
            <p> Call: 0546880898 or 0245600275</p>
          </div>
        </div>
        <div class="mdl-mega-footer__middle-section">
          <div class="mdl-mega-footer__drop-down-section">
            <h1 class="mdl-mega-footer__heading">Our Services</h1>
            <ul class="mdl-mega-footer__link-list">
              <li>
                <a href="#">Design </a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Print Media</a>
              </li>
              <li>
                <a href="#">Market Research </a>
              </li>
              <li>
                <a href="#">Branding </a>
              </li>
              <li>
                <a href="#">Insights</a>
              </li>
            </ul>
          </div>
          <div class="mdl-mega-footer__drop-down-section">
            <h1 class="mdl-mega-footer__heading">Highlights</h1>
            <ul class="mdl-mega-footer__link-list">
              <li>
                <a href="#">Movie Reviews</a>
              </li>
              <li>
                <a href="#">Brand Reviews</a>
              </li>
              <li>
                <a href="#">Digital Marketing BootCamp</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mdl-mega-footer__bottom-section">
          <div class="mdl-logo">(c) 2019 Loudspeaker</div>
          <ul class="mdl-mega-footer__link-list">
            <li>
              <a href="#">designed by BLOOP</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default MainFooter;
