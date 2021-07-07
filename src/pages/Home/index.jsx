import UseFetch from 'hooks/UseFetch';
import React from 'react';
import Day from 'components/Day';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  let lat = "48.8921848";
  let lon = "-2.3443523";
  const res = UseFetch(lat, lon);

  return(
    <div className="home-page">
    {res.response && lat && lon?
      <>
        {res.response.daily.map((days) => {
          return(
            <div key={uuidv4()}>
              <Day date={days.dt} temp={days.temp.day} description={days.weather[0].description} icon={days.weather[0].icon}/>
            </div>
          )
        })}
      </>
      : <p>Loading...</p>}
    </div>
  )
};

export default Home;
