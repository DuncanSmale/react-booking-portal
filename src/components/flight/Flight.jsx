import classes from './flight.module.css'

export default function Flight(props) {
    const { flight, onBookFlight } = props

    const departureTime = new Date(flight.departureTime).toTimeString().split(' ')[0].split(':').splice(0, 2).join(':')
    const arrivalTime = new Date(flight.arrivalTime).toTimeString().split(' ')[0].split(':').splice(0, 2).join(':')

    const onButtonClickedHandler = (e) => {
        onBookFlight(flight)
    }

    return (
        <div className={`${classes.card} ${classes['margin-top']}`}>
            <div className={classes.padding}>
                <div className={`${classes.container} ${classes.space}`}>
                    <span>{flight.flightNumber}</span>
                    <span>
                        <span className={classes.bold}>{flight.origin}</span> -
                        {departureTime}
                    </span>
                    <span>
                        {arrivalTime} -
                        <span className={classes.bold}>{flight.destination}</span>
                    </span>
                    <span>{flight.availableSeats}</span>
                    <button className={classes.button} onClick={onButtonClickedHandler}>R{flight.seatCost}</button>
                </div>
            </div>
        </div>
    )
}