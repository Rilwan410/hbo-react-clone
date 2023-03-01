import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "@/components/HBOProvider";
import axios from "axios";
import Link from "next/link";

function SearchModal(props) {
  const globalState = useStateContext();
  const [popData, setPopData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");
  const router = useRouter();

  useEffect(
    () => async () => {
      try {
        let popData = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
        );
        setPopData(popData.data.results.filter((item, i) => i < 14));
        setShowResults(false);
        console.log("popdata", popData.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  async function handleInput(e) {
    try {
      setText(e.target.value);
      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
      );
      setSearchData(
        searchData.data.results.filter(
          (item, i) => item.media_type === "tv" || item.media_type === "movie"
        )
      );
      setShowResults(true);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  }

  const clickedThumbnail = (type, id, media_type) => {
    if (type === "popular") {
      router.push(`/movie/${id}`);
      globalState.setSearchOpen(false);
    }
    if (type === "search") {
      router.push(`/${media_type}/${id}`);
      globalState.setSearchOpen(false);
    }
    // router.push(props.linkUrl);
    console.log("send user to media page" + props.mediaUrl);
  };

  return (
    <div
      className={`search-modal ${
        globalState.searchOpen ? "search-modal__active" : ""
      }`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          placeholder="search for a title"
          onChange={handleInput}
          value={text}
        />
        <div
          className="search-modal__close-btn"
          onClick={() => globalState.setSearchOpen(false)}
        >
          <i className="fas fa-times" />
        </div>
      </div>

      <h3 className="search-modal__title">
        {showResults && searchData.length >= 1
          ? `Search Results for ${text}`
          : "Popular Searches"}
      </h3>

      <div className="search-modal__thumbnails">
        {showResults && searchData.length >= 1 ? (
          <SearchResults
            searchData={searchData}
            clickedThumbnail={clickedThumbnail}
          />
        ) : (
          <PopularResults
            popData={popData}
            clickedThumbnail={clickedThumbnail}
          />
        )}
      </div>
    </div>
  );
}

const PopularResults = (props) => {
  return props.popData.map((item, i) => {
    return (
      <div
        key={i}
        className="search-modal__thumbnail"
        onClick={() => props.clickedThumbnail("popular", item.id)}
      >
        <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

const SearchResults = (props) => {
  return props.searchData.map((item, i) => {
    return (
      <div
        key={i}
        className="search-modal__thumbnail"
        onClick={() =>{
          props.clickedThumbnail("search", item.id, item.media_type)
        }
        }
      >
        <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

export default SearchModal;
