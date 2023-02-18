import React from "react";
import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal";

function Header(props) {
  return (
    <div> 
       <header className="top-header">

        <div className="top-header__left-side">
          <div className="top-header__menu-btn">
            <i className=" fas fa-bars" />
          </div>

          <div className="top-header__search-btn">
            <i className="fas fa-search" />
          </div>
        </div>

        <div className='top-header__logo'></div>

          <div className="top-header__account">
            <img src='https://randomuser.me/api/portraits/women/30.jpg' className='top-header__user-img'/>
            <div className='top-header__user-name'>Brianne</div>
          </div>
        <Account/>
        <SearchModal/>
      </header>
    </div>
  );
}

export default Header;
