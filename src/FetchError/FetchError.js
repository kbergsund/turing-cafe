import React from 'react';
import './FetchError.css';

const FetchError = ({ error }) => {
  return(
    <h3>{error.message}. Try again later!</h3>
  )
}

export default FetchError;