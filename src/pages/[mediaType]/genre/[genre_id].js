import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { shuffleArray } from "@/components/utilities";
import { useStateContext } from "../../../components/HBOProvider";
import MainLayout from "../../../components/Layout/MainLayout";
import FeaturedMedia from "../../../components/UI/FeaturedMedia/FeaturedMedia";
import AuthCheck from "@/components/AuthCheck";
import MediaRow from "../../../components/UI/MediaRow/MediaRow";
import LazyLoad from "react-lazyload";
import Placeholder from "../../../components/UI/Placeholder/Placeholder";
import GenreNav from "@/components/GenreNav/GenreNav";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();

  const showRandomMedia = () => {
    let thumbType;

    return props.genresData.map((item, index) => {
      thumbType = shuffleArray(globalState.thumbTypes)[0];
      return (
        <div key={item.id}>
          <LazyLoad
            offset={-400}
            placeholder={<Placeholder title={item.name} type={thumbType} />}
          >
            <MediaRow
              title={item.name}
              type={thumbType}
              endpoint={`/discover/${props.query.mediaType}?with_genres=${
                props.query.genre_id
              }&sort_by=popularity.desc&primary_release_year=2022&page=${
                index + 1
              }`}
            />
          </LazyLoad>
        </div>
      );
    });
  };

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
        title={
          props.query.mediaType === "movie"
            ? props.featuredData.title
            : props.featuredData.name
        }
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        type="single"
      />
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      {showRandomMedia()}
      <LazyLoad
        offset={-200}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="/discover/movie?sort_by=popularity.desc&primary_release_year=2022"
        />
      </LazyLoad>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2022&with_genres=${context.query.genre_id}&api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
    );
    console.log("genresData");
    console.log(genresData.data);
  } catch (error) {
    console.log("error");
    console.log(error);
  }
  console.log(genresData);
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    },
  };
}
