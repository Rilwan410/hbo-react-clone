import React, { useState } from "react";
import { useStateContext } from "@/components/HBOProvider";
import Link from "next/link";

function GenreNav(props) {
  // console.log(props)
  const [activeNav, setActiveNav] = useState(false);
  setTimeout(() => {
    setActiveNav(true);
  }, 100);
  return (
    <ul className={`genre-nav ${activeNav ? "genre-nav--active" : ""}`}>
      <GenreList genresData={props.genresData} mediaType={props.mediaType} />
    </ul>
  );
}

const GenreList = (props) => {
  console.log("hello world");
  console.log(props);
  return props.genresData.map((item) => {
    console.log(props);
    return (
      <li key={item.id}>
        <a href={`/${props.mediaType}/genre/${item.id}`}>{item.name}</a>
      </li>
    );
  });
};

export default GenreNav;
