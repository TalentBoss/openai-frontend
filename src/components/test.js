import {useEffect, useState} from "react";

const Test = () => {
  const [state, setState] = useState([{
    hotel_id: '65365b43a67a7143a015816a',
    prices_data: [
      [168.00, 210.00, 517.00, 486.00],
      [164.00, 225.00, 138.00, 204.00],
      [175.00, 195.00, 300.00, 748.00],
      [451.00, 253.00, 240.00, 336.85],
      [175.00, 195.00, 300.00, 748.00],
      [364.00, 225.00, 138.00, 204.00],
      [368.00, 210.00, 517.00, 486.00]
    ],
    year: 2022,
    is_delete: 'N'
  }, {
    hotel_id: '78365b43a67a7143a015816a',
    prices_data: [
      [268.00, 110.00, 217.00, 286.00],
      [364.00, 225.00, 138.00, 204.00],
      [475.00, 195.00, 300.00, 748.00],
      [351.00, 253.00, 240.00, 336.85],
      [375.00, 195.00, 300.00, 748.00],
      [264.00, 225.00, 138.00, 204.00],
      [168.00, 210.00, 517.00, 486.00]
    ],
    year: 2021,
    is_delete: 'N'
  }]);

  const [yearId, setYearId] = useState(0);
  useEffect(() => {

  }, [state])
  const changeYear = (e) => {
    const selectedYear = parseInt(e.target.value);
    const id = state.findIndex((item) => item.year === selectedYear);
    if (id !== -1) {
      setYearId(id);
      //console.log(yearId)
    }
  }
  const searchId = () => {
    const value = [351.00, 253.00, 240.00, 336.85];
    const id = state[1].prices_data.indexOf(value);
    console.log(id)
  }
  return (
    <>
      <select onChange={changeYear} value={state[yearId]&&state[yearId].year}>
        {
          state.map(({year}, idx) => (
            <option value={year} key={idx}>{year}</option>
          ))
        }
      </select>
      <button onClick={() => searchId()}>Click</button>
    </>
  )
}

export default Test;