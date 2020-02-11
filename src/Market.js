import React from 'react';
import PropTypes from 'prop-types';

var marketInfo = {
  height:'15vw',
  width: '15vw',
  border:'2px solid black',
  display:'inline-block',
  padding: '2vh'
}


function Market(props){
  return(
    <div style = {marketInfo}>
    <hr/>
    <h1>{props.day}</h1>
    <h4>{props.location}</h4>
    <h4><b>{props.booth}</b></h4>
    <h4><em>{props.hours}</em></h4>
    </div>
  )
}

Market.propTypes = {
  location: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired
};

export default Market;
