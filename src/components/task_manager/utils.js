export const setQueryParameter = (key, value) => {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.pushState({}, "", url);
};

export const getQueryParameter = (key) => {
  const url = new URL(window.location);
  return url.searchParams.get(key);
};

export const removeQueryParameter = (key) => {
  const url = new URL(window.location);
  url.searchParams.delete(key);
  window.history.pushState({}, "", url);
};
