const FormatDate = (props) => {
  let timestamp = props.date;
  let date = new Date(timestamp * 1000);
  let formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();

  return(
    <p>{formattedDate}</p>
  )
};

export default FormatDate;
