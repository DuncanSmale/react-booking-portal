import { useState } from "react";
import DaysInput from "../days-input/DaysInput";
import MultiDate from "../multi-date/MultiDate";
import SingleDate from "../single-date/SingleDate";

const OPTIONS = ['DAYS', 'ORIGINDEPARTURE', 'DATEFROM']

const FlightFilter = (props) => {
  const [option, setOption] = useState('DAYS')
  const filterComponents = {
    'DAYS': <DaysInput />,
    'ORIGINDEPARTURE': <MultiDate />,
    'DATEFROM': <SingleDate />
  }

  const filter = filterComponents[option]

  return (
    <>
      <select name="filterOption" onChange={e => setOption(e.target.value)}>
        {OPTIONS.map(e => {
          return <option value={e}>{e}</option> 
        })}
      </select>
      {filter}
    </>

  );
}

export default FlightFilter;