import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import ForYouList from "@/components/UI/ForYouList/ForYouList";
import JustAdded from "@/components/UI/JustAdded/JustAdded";
import PosterView from "@/components/UI/PosterView/PosterView";

function Home() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded/>
      <PosterView/>
    </MainLayout>
  );
}

export default Home;
