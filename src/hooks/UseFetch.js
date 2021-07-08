import { useState, useEffect } from 'react';

const UseFetch = (lat, lon) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
    let method = "GET";
    const options = {
      method,
    };

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
  }, [lat, lon]);
  return { response, error, isLoading };
    };

    export default UseFetch;
