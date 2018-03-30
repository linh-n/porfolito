export const URL_VIEWING_PHOTO_REGEX = /\/.*?\/gallery\/(.*)/;

export const extractLocaleFromPathname = (pathname, availableLocales) => {
  const [, localeInUrl] = pathname.split("/");
  return availableLocales.includes(localeInUrl) ? localeInUrl : "en";
};

export const changeLocationLocale = (location, newLocale) => {
  const [, , ...partsAfterLocale] = location.pathname.split("/");
  const pathWithoutLocale =
    (partsAfterLocale.length > 0 ? `/${partsAfterLocale.join("/")}` : "") + location.search;
  return `/${newLocale}${pathWithoutLocale}`;
};

export const initIfNavigateDirectlyToViewingPhoto = availableLocales => {
  const { pathname } = window.location;
  if (!pathname.match(URL_VIEWING_PHOTO_REGEX)) return;
  const locale = extractLocaleFromPathname(pathname, availableLocales);
  window.history.replaceState({}, "", `/${locale}/gallery`);
  window.history.pushState({}, "", pathname);
};
