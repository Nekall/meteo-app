import React from 'react';

const UseFetch = (lat, lon) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [response, setResponse] = React.useState();
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  let method = "GET";
  const options = {
    method,
  };


  React.useEffect(() => {
    console.log(`${lat}, ${lon}`);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${api_key}`, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
    };

    export default UseFetch;
