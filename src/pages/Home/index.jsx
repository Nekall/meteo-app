import UseFetch from 'hooks/UseFetch';
import { useState } from 'react'

const Home = () => {
  const [lat, setLat] = useState("48.8921848");
  const [lon, setLon] = useState("-2.3443523");
  const res = UseFetch(lat, lon);
  console.log(res);

  return(
    <>
    {res.response?
      <div>
        <p>{res.response.current.weather[0].icon}</p>
      </div>
      : <p>Loading...</p>}
    </>
  )
};
export default Home;
