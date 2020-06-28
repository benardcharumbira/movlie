const apiKey = "e7799b7a";
const url = "http://www.omdbapi.com/?s=titanic&";

export const fetchData = () => {
  const data = fetch(`${url}apikey=${apiKey}`).then((resp) => {
    return resp.json();
  });
  return data;
};
