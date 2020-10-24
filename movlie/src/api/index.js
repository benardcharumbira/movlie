const apiKey = "e7799b7a";
export const fetchData = (movieName) => {
  const data = fetch(
    `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
  ).then((resp) => {
    return resp.json();
  });
  return data;
};
