import React from 'react';
import './Reservations.css';

const Reservations = ({ id, name, date, time, number, deleteResy }) => {
  return (
    <section>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of guests: {number}</p>
      <button className="cancel-button" onClick={() => deleteResy(id)}>Cancel</button>
    </section>
  )
}

export default Reservations;