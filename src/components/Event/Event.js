import React, { useEffect, useState } from 'react';

const Event = ({event}) => {
    console.log(event);
    const deleteEvent = id => {
        console.log(id);
    }
    return (
        <div className="col-md-3">
            {/* <h1>anik zaman</h1>
            <h1>{event.name}</h1> */}
            {/* <img style={{height: '300px'}} src={event.imageURL} alt=""/> */}
            <h3>{event.name} <button onClick={() => deleteEvent(event._id)}>Delete</button></h3>
            <span><h6>{event.orderTime && event.orderTime.slice(0,10)}</h6> <span>processing</span> </span>
            
        </div>
    );
};

export default Event;