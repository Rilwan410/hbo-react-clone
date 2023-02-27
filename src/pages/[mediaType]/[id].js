import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import CastInfo from "@/components/UI/CastInfo/CastInfo";
import SearchModal from "@/components/UI/SearchModal/SearchModal";
import MediaRow from "@/components/UI/MediaRow/MediaRow";
import AuthCheck from "@/components/AuthCheck";
import { useRouter } from "next/router";
import axios from "axios";
import LazyLoad from "react-lazyload";
import Placeholder from "../../components/UI/Placeholder/Placeholder";

function SingleMediaPage(props) {
  const router = useRouter();
  const [mediaData, setMediaData] = useState(false);

  console.log(props);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={
          props.query.mediaType === "movie"
            ? props.mediaData.title
            : props.mediaData.name
        }
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.mediaData.backdrop_path}`}
        location="In theaters and HBO MAX. Streaming throughout May 23rd"
        linkUrl="/movies/id"
        type="single"
      />
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder
            title="Similar To This"
            type="large-v"
            mediaType={props.query.mediaType}
          />
        }
      >
        <MediaRow
          title="Similar To This"
          type="small-v"
          mediaType = {props.query.mediaType}
          endpoint={`${props.query.mediaType === 'movie' ? 'movie' : 'tv'}/${props.query.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaId={props.query.id} mediaType = {props.query.mediaType}/>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let mediaData;

  try {

    mediaData = await axios.get(
      // console.log('success fetching data')
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
    );
  } catch (error) {
    // console.log('error fetching data')
    console.log(error);
  }
  // console.log(mediaData)

  return {
    props: { mediaData: mediaData.data, query: context.query },
  };
}

export default SingleMediaPage;
