import { useState } from "react";

const DaysInput = (props) => {
    const [days, setDays] = useState(0)

    return (
        <input type="number" value={days} onChange={e => setDays(e.target.value)} />
    );
}

export default DaysInput;