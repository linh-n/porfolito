import { createSelector } from "reselect";

const getPhotos = state => state.gallery.photos;
export default createSelector([getPhotos], photos => photos);
