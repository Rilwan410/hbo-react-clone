import React from "react";
import SideNav from "../UI/SideNav/SideNav";
import Header from "../UI/Header/Header";
function MainLayout(props) {
  return (
    <div
      style={{
        background:
          // "linear-gradient(312deg,rgba(26, 39, 103, 1) 0%,rgba(48, 20, 94, 1) 45%,rgba(0, 0, 0, 1) 100%)",
          "black",
        height: "100%",
      }}
    >
      <Header />
      <SideNav />
      <section className="content-container">{props.children}</section>
    </div>
  );
}

export default MainLayout;
