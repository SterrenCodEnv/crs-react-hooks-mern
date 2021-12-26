import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({year = 2021}) => {

    const [counter, setCounter] = useState(0);
    const handleAdd = () => setCounter((c) => c + 1) ;
    const handleSubstract = () => setCounter((c) => c - 1) ;
    const handleReset = () => setCounter((c) => c = 0);
    
    return (
    <>
        <h1>CounterApp - {year}</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubstract }>-1</button>
    </>
    );
}

CounterApp.propTypes = {
    year : PropTypes.number.isRequired
}

export default CounterApp;