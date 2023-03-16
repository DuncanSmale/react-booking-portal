import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Flight from "../flight/Flight";

export default function Flights(props) {
    const [flights, setFlights] = useState([])
    const { response, error, loading } = useAxios({
        url: "http://localhost:8202/flights", method: "GET", auth: {
            username: "user",
            password: "the_cake"
        },
    })

    const onBookFlight = (flight) => {
        console.log(flight)
    }

    useEffect(() => {
        if (!!response) {
            setFlights(response)
        }
        console.log(response)
    }, [response])

    return (
        <section>
            <h1>Flights</h1>
            {flights.map(e => {
                return <Flight flight={e} key={e.id} onBookFlight={onBookFlight} />
            })}
        </section>
    )
}