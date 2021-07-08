import React, { useState } from 'react';
import UseFetch from 'hooks/UseFetch';
import { v4 as uuidv4 } from 'uuid';
import Day from 'components/Day';

const Home = () => {
  const [lat, setLat] = useState("48.8589507");
  const [lon, setLon] = useState("2.2770204");
  let res = UseFetch(lat, lon);


  const locateUser = () => {
    // https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API
  };

  const chooseCity = () => {
    let city = document.getElementById('cities').value;
    console.log(city);

    switch(city) {
    case "lille":
      setLat("50.6311167");
      setLon("3.0121411");
    break;
    case "marseille":
      setLat("43.2804942");
      setLon("5.3104568");
    break;
    case "lyon":
      setLat("45.75801");
      setLon("4.8001016");
    break;
    case "toulouse":
      setLat("43.6008029");
      setLon("1.3628014");
    break;
    case "nice":
      setLat("43.7032932");
      setLon("7.1827775");
    break;
    case "nantes":
      setLat("47.2383172");
      setLon("-1.6300956");
    break;
    case "montpellier":
      setLat("43.6100788");
      setLon("3.8391421");
    break;
    case "strasbourg":
      setLat("48.5692059");
      setLon("7.6920545");
    break;
    case "bordeaux":
      setLat("44.8637834");
      setLon("-0.6211604");
    break;
    case "location":
      locateUser();
    break;
    default:
      setLat("48.8589507");
      setLon("2.2770204");
    }
  };

  return(
    <div className="home-page">
    {res.response && lat && lon?
      <>
        <div>
          <label htmlFor="cars">Selectionner une ville :</label>
          <select onChange={() => chooseCity()} className="select-cities" name="cities" id="cities">
              <option value="paris">Paris</option>
              <option value="marseille">Marseille</option>
              <option value="lyon">Lyon</option>
              <option value="toulouse">Toulouse</option>
              <option value="nice">Nice</option>
              <option value="nantes">Nantes</option>
              <option value="montpellier">Montpellier</option>
              <option value="strasbourg">Strasbourg</option>
              <option value="bordeaux">Bordeaux</option>
              <option value="lille">Lille</option>
              <option value="location">Localisation</option>
          </select>
        </div>
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
