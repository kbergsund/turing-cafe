import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations';
import ReservationForm from '../ReservationForm/ReservationForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: null
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => {
        this.setState({
          reservations: data
        })
      })
    // .catch(err => {
    //   this.setState({
    //     error: err.message
    //   })
    // })
  }

  addResy = (newResy) => {
    this.setState({ reservations: [...this.state.reservations, newResy]})
  }

  
  render() {
    const displayReservations = this.state.reservations && this.state.reservations.map(resy => <Reservations key={resy.id} name={resy.name} date={resy.date} time={resy.time} number={resy.number} />)

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addResy={this.addResy}/>
        </div>
        <div className='resy-container'>
          {displayReservations}
        </div>
      </div>
    )
  }
}

export default App;
