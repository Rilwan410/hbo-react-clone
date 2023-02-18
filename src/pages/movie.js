import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import ForYouList from "@/components/UI/ForYouList/ForYouList";
import JustAdded from "@/components/UI/JustAdded/JustAdded";
import PosterView from "@/components/UI/PosterView/PosterView";
import CastInfo from "@/components/UI/CastInfo/CastInfo";
import SearchModal from "@/components/UI/SearchModal/SearchModal";

function movie() {
    return (
        <MainLayout>
          <FeaturedMedia />
          <PosterView/>
          <CastInfo/>
        </MainLayout>
      );
}

export default movie
