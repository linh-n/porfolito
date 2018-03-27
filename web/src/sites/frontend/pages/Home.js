import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "modules/ui";
import { Gallery, ViewPhoto } from "modules/gallery";

export default () => (
  <Layout>
    <Gallery />
    <Route path="/:locale/gallery/:photoId" component={ViewPhoto} />
  </Layout>
);
