import FormatDate from 'components/FormatDate';
import Icon from 'components/Icon';
import './index.scss';

const Day = (props) => {

  let description = props.description.charAt(0).toUpperCase() + props.description.slice(1);

  return(
    <div className="card-one-day">
      <Icon icon={props.icon}/>
      <div>
        <FormatDate date={props.date}/>
        <p>{Math.round(props.temp)} °C</p>
        <p>{description}</p>
      </div>
    </div>
  )
};

export default Day;
