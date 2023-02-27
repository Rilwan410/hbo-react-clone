import React from "react";
import { useStateContext } from "@/components/HBOProvider";
import Link from "next/link";

function SideNav(props) {
  const globalState = useStateContext();
  return (
    <div
      className={`side-nav ${
        globalState.sideNavOpen ? "side-nav--active" : ""
      }`}
    >
      <div className="side-nav__close-btn">
        <i
          className="fas fa-times"
          onClick={() => {
            globalState.setSideNavOpen(false);
          }}
        />
      </div>

      <ul className="side-nav__main">
        <li
          onClick={() => {
            globalState.setSideNavOpen(false);
          }}
        >
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>

        <li
          onClick={() => {
            globalState.setSideNavOpen(false);
          }}
        >
          <Link href="/movie" legacyBehavior>
            <a>Movie</a>
          </Link>
        </li>
         
        <li
          onClick={() => {
            globalState.setSideNavOpen(false);
          }}
        >
          <Link href="/tv" legacyBehavior>
            <a>Series</a>
          </Link>
        </li>
      </ul>

      {/* <div className="side-nav__divider" /> */}
    </div>
  );
}

export default SideNav;
