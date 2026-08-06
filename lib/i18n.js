export function localizedHref(locale, path) {
  if (locale === "en") {
    return path === "/" ? "/en" : `/en${path}`;
  }
  return path;
}
