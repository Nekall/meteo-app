import { useState, useEffect } from 'react';

const UseFetch = (lat, lon) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let method = "GET";
  const options = {
    method,
  };


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&appid=${api_key}&lang=fr&units=metric`, options);
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
