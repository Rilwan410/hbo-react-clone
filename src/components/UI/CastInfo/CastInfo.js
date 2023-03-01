import React, { useState, useEffect } from "react";
import axios from "axios";

function CastInfo(props) {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([]);

  // /discover/movie?with_genres=28&primary_release_year=2022
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.mediaType === 'movie' ? 'movie' : 'tv'}/${props.mediaId}/credits?api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
      )
      .then((response) => {
        setCredits(response.data);
        setLoadingData(false);

        console.log("Success Response for cast and crew");
        console.log(response);
      })
      .catch((error) => {
        console.log("Error Response for cast and crew");
        console.log(error);
      });
  }, []);

  const showCast = () => {
    if (!loadingData) {
      return credits.cast.map((item, index) => {
        return (
          <ul className="cast-info__crew" key={index}>
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Cast...</div>;
    }
  };

  const showCrew = () => {
    if (!loadingData) {
      return credits.crew.map((item, index) => {
        return (
          <ul className="cast-info__crew" key={index}>
            <li>{item.job}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Crew...</div>;
    }
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast</div>

      <div className="class-info__list">{showCast()}</div>

      <div className="cast-info__group-title">Crew</div>

      <div className="class-info__list">{showCrew()}</div>
    </div>
  );
}
{
}
export default CastInfo;
