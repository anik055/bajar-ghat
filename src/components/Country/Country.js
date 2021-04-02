import React from 'react';
import './country.css'

const Country = (props) => {
    const flagStyle = {height: '50px'};
    const {name, population, flag} = props.country;
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='eachCountry'>
            <h4>this is a {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h3>population is  {population} </h3>
            
            <button onClick={() => handleAddCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;