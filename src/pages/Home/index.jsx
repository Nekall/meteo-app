import UseFetch from 'hooks/UseFetch';
import { useState, useEffect } from 'react'

const Home = () => {
  const [lat, setLat] = useState("48.8921848");
  const [lon, setLon] = useState("-2.3443523");
  const res = UseFetch(lat, lon);

console.log(res.response.data[0].weather.description);

  return(
    <>
      {res.response? <p>{res.response.data[0].weather.description}</p> : <p>Loading...</p>}
    </>
  )
};
export default Home;
