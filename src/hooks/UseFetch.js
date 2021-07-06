import React from 'react';

const UseFetch = (lat, lon) => {

  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  let method = "GET";
  const options = {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };


  React.useEffect(() => {
    console.log(`${lat}, ${lon}`);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}&include=minutely`, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
    };

    export default UseFetch;
