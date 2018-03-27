import { createSelector } from "reselect";

const getPhotos = state => state.gallery.photos;
const getLocale = state => state.ui.locale;
const getViewingPhoto = state => state.gallery.viewing;

export const getPhotosState = createSelector([getPhotos, getLocale], (photos, locale) =>
  photos.map(photo => ({
    ...photo,
    link: `/${locale}/gallery/le-test`,
    title: photo.name,
    subtitle: new Date(photo.date * 1000).toString(),
  })),
);
export const getViewingPhotoState = createSelector([getViewingPhoto], viewing => viewing);
export const isViewingPhotoState = createSelector(
  [getViewingPhoto],
  viewing => viewing !== undefined && viewing !== null,
);
