import React from 'react';
import './Reservations.css';

const Reservations = ({ name, date, time, number }) => {
  return(
  <section>
    <h2>{name}</h2>
    <p>{date}</p>
    <p>{time}pm</p>
    <p>Number of guests: {number}</p>
    <button>Cancel</button>
  </section>
  )
}

export default Reservations;