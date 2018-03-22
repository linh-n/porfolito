import React from "react";
import { Layout } from "modules/ui";
import { HomeSearch } from "modules/search";
import HomeImage from "components/home/HomeImage";
import HomeAbout from "components/home/HomeAbout";

export default () => (
  <Layout>
    <HomeImage />
    <HomeSearch />
    <HomeAbout />
  </Layout>
);
