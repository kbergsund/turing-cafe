import React from 'react';
import './Reservations.css';

const Reservations = ({ name, date, time, number, error }) => {
  return (
    <section>
      <h2>{error ? `${error.message}. Try again later!` : name}</h2>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of guests: {number}</p>
      <button className="cancel-button">Cancel</button>
    </section>
  )
}

export default Reservations;