import React from "react";
import { useStateContext } from "@/components/HBOProvider";

function Account(props) {
  const globalState = useStateContext();
  return (
    <div
      // className={`account ${globalState.accountOpen ? "account__active" : ""}`}
      className={`account ${globalState.accountOpen ? "account__active" : ""}`}
    >
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="account__watch-video">
            <img src="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/90a6109c-3d90-11ed-b3b9-02a7e5390830.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <a href="#" className="active">
              My List
            </a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="acccount__main">
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
