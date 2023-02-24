import React, { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "../../utilities";

function MediaRow(props) {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);

  // /discover/movie?with_genres=28&primary_release_year=2022
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
      )
      .then((response) => {
        setMoviesData(shuffleArray(response.data.results));
        setLoadingData(false);
        console.log("Success Response for " + props.title);
        console.log(response);
      })
      .catch((error) => {
        console.log("Error Response for " + props.title);
        console.log(error);
      });
  }, []);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };

  const showThumbnails = (type) => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return <Thumbnail movieData={movie} type={type} />;
        });
  };

  // const thumbSize = (type) => {
  //   if (props.type === "large-v") {
  //     return "400";
  //   }

  //   if (props.type === "small-v") {
  //     return "185";
  //   }

  //   if (props.type === "large-h") {
  //     return "700";
  //   }

  //   if (props.type === "small-h") {
  //     return "450";
  //   }
  // };

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {showThumbnails(props.type)}
        {/* {loopComp(<Thumbnail />, 10)} */}
        {/* <Thumbnail /> */}
        {/* <Skeleton /> */}
      </div>
    </div>
  );
}

const Thumbnail = ({ movieData, type}) => {
  const thumbSize = (typee) => {
    if (typee === "large-v") {
      return "400";
    }

    if (typee === "small-v") {
      return "185";
    }

    if (typee === "large-h") {
      return "500";
    }

    if (typee === "small-h") {
      return "342";
    }
  };

  return (
    <div className="media-row__thumbnail">
      <img
        src={`https://image.tmdb.org/t/p/w${thumbSize(type)}/${movieData.poster_path}`}
      />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};
export default MediaRow;
