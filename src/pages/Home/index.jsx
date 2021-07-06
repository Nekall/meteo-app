import UseFetch from 'hooks/UseFetch';
import { useState } from 'react'

const Home = () => {
  const [lat, setLat] = useState("48.8921848");
  const [lon, setLon] = useState("-2.3443523");
  const res = UseFetch(lat, lon);
  console.log(res);

  return(
    <>
    {res.response? <p>Reponse OK</p> : <p>Loading...</p>}
    </>
  )
};
export default Home;
