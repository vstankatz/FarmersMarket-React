import React from 'react';

function NewMarketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='day'
          placeholder='Date'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          id='hours'
          type='text'
          placeholder='Hours'/>
          <input
          type='text'
          id='booth'
          placeholder='Booth'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default NewMarketForm;
