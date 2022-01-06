import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = (props) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');

  const makeResy = (e) => {
    e.preventDefault();
    const newResy = {
      id: Date.now(),
      name,
      date,
      time,
      number
    }
    props.addResy(newResy)
    clearInputs()
  }

  const clearInputs = () => {
    setName('')
    setDate('')
    setTime('')
    setNumber('')
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => setName(e.target.value)} />
      <input
        type='text'
        placeholder='Date (mm/dd)'
        name='date'
        value={date}
        onChange={e => setDate(e.target.value)} />
      <input
        type='text'
        placeholder='Time'
        name='time'
        value={time}
        onChange={e => setTime(e.target.value)} />
      <input
        type='number'
        placeholder='Number of guests'
        name='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))} />
      <button id='formButton' onClick={e => makeResy(e)}>Make Reservation</button>
    </form>
  )
}

export default ReservationForm;