import React from "react";
import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import ls from 'local-storage'
import { useStateContext } from "@/components/HBOProvider";
import Link from "next/link";

function Header(props) {
  const localStorageKey = ls.get('users')
  console.log(localStorageKey.length)
  const globalState = useStateContext();
  return (
    <div>
      <header
        className={`top-header ${
          globalState.accountOpen || globalState.sideNavOpen
            ? "top-header--menu-open"
            : ""
        }`}
      >
        <div className="top-header__left-side">
          <div className="top-header__menu-btn">
            <i
              className=" fas fa-bars"
              onClick={() => {
                globalState.setSideNavOpen(true);
                globalState.setAccountOpen(false);
              }}
            />
          </div>

          <div
            className="top-header__search-btn"
            onClick={() => globalState.setSearchOpen(true)}
          >
            <i className="fas fa-search" />
          </div>
        </div>


        <a href='/'><div className="top-header__logo"></div></a>

        <div
          className="top-header__account"
          onClick={() => {
            globalState.setAccountOpen(!globalState.accountOpen);
            !globalState.setSideNavOpen(false);
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
            // src="https://randomuser.me/api/portraits/women/30.jpg"
            className="top-header__user-img"
          />
          <div className="top-header__user-name">{localStorageKey[localStorageKey.length - 1].user}</div>
        </div>
        <Account />
        <SearchModal />
      </header>
    </div>
  );
}

export default Header;
