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
            
        </div>
    )
}

export default Flights