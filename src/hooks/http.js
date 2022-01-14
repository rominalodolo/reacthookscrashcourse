import { useState, useEffect } from "react";

// const cors = require("cors")
// app.use(
//   cors({
//     origin: "https://swapi.co/api/people",
//   })
// )

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  //   fetch('https://swapi.co/api/people')
  useEffect(() => {
    setIsLoading(true);
    console.log("Sending Http request to URL: " + url);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
