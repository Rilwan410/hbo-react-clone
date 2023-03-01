import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../components/HBOProvider";
import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import AuthCheck from "@/components/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import LazyLoad from "react-lazyload";
import Placeholder from "../components/UI/Placeholder/Placeholder";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&start=16"
        title="Mortal Kombat"
        location="In theaters and HBO MAX. Streaming throughout May 23rd"
        linkUrl="/movie/460465"
        type="front"
        mediaType={"movie"}
        mediaId={460465}
      />

      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="/discover/movie?sort_by=popularity.desc&primary_release_year=2022"
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Series" type="small-h" />}
      >
        <MediaRow
          title="Series"
          mediaType="series"
          type="small-h"
          endpoint="discover/tv?&primary_release_year=2022"
        />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <Placeholder title="Movies" type="small-v" offset={-400} />
        }
      >
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2022"
        />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <Placeholder title="Movies" type="small-v" offset={-400} />
        }
      >
        <MediaRow
          title="Horror"
          type="small-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2022"
        />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <Placeholder title="Movies" type="large-h" offset={-400} />
        }
      >
        <MediaRow
          title="Animations"
          type="large-h"
          endpoint="discover/movie?with_genres=16&primary_release_year=2022"
        />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <Placeholder title="Movies" type="small-v" offset={-400} />
        }
      >
        <MediaRow
          title="Sci-fi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2022"
        />
      </LazyLoad>
    </MainLayout>
  );
}
