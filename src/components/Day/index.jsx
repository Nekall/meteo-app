import humidity from 'assets/images/humidity.svg';
import FormatDate from 'components/FormatDate';
import wind from 'assets/images/wind.svg';
import Icon from 'components/Icon';
import './index.scss';

const Day = (props) => {
  let description = props.description.charAt(0).toUpperCase() + props.description.slice(1);

  return(
    <div className="card-one-day">
      <Icon icon={props.icon}/>
      <div>
        <FormatDate date={props.date}/>
        <p><img src={humidity} alt="Humidité" className="logo"/> {props.humidity}%</p>
        <p><img src={wind} alt="Vent" className="logo"/> {props.wind}km/h</p>
        <p>{Math.round(props.temp)}°C</p>
        <p>{description}</p>
      </div>
    </div>
  )
};

export default Day;
