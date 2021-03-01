import React, { useEffect, useState } from 'react';


const Flights = () => {

    useEffect(() => {
    fetchFlights()
    }, [])

    const [flights, setFlights] = useState([])

    const fetchFlights = () => {
        fetch(`http://api.aviationstack.com/v1/flights?access_key=3dd84da6dbe81db101001efa4a70aa15`)
        .then(resp => resp.json())
        .then(({data}) => setFlights(data))
    }
    console.log(flights)
    return (
        <div>
            <h1> Flights </h1>
            <ul className="flights">
                {
                    flights.map(flight => (
                        <ul key={flight.id}>
                           <h1>{flight.airline.name} {flight.airline.iata}</h1>
                            <h3> Departing {flight.departure.airport} </h3>
                            <h5> Gate {flight.departure.gate} </h5>
                            <h3> Arrival {flight.arrival.airport}</h3>
                             </ul>
                    ))
                }
            </ul>
        </div>
    )
}

export default Flights