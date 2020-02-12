import React from 'react';
import PropTypes from 'prop-types';

function Month(props){
  return(
    <div>
      <h3>{props.date}</h3>
      <p><em>{props.selection}</em></p>
      <hr/>
    </div>
  );
}

Month.propTypes = {
  date: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Month;
