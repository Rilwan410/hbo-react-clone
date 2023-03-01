import React from "react";
import { useStateContext } from "@/components/HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";
function Account(props) {
  const globalState = useStateContext();
  const router = useRouter();

  const watchMedia = (url) => {
    router.push(url);
    globalState.setAccountOpen(false);
  };

  const showWatchList = () => {
    return globalState.watchList.map((item, index) => {
      console.log(item.mediaId);
      return (
        <div className="account__watch-video" key={index}>
          <img src={item.mediaUrl} />
          <div className="account__watch-overlay">
            <div className="account__watch-buttons">
              <div
                className="account__watch-circle"
                onClick={() => watchMedia(`/${item.mediaType}/${item.mediaId}`)}
              >
                <i className="fas fa-play" />
              </div>
              <div
                className="account__watch-circle"
                onClick={() => globalState.removeFromList(item.mediaId)}
              >
                <i className="fas fa-times" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const signOut = () => {
    ls.remove("users");
    router.push("/create");
  };

  return (
    <div
      className={`account ${globalState.accountOpen ? "account__active" : ""}`}
    >
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          {globalState.watchList !== null
            ? showWatchList()
            : "No Movies To Display"}
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
          <li
            onClick={() => {
              signOut();
            }}
          >
            <a href="#">Account</a>
          </li>
          <li
            onClick={() => {
              signOut();
            }}
          >
            <a>Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
