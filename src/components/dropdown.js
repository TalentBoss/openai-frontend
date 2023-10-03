import '../css/dropdown.css'
const DropDown = (props) => {

  return (
    <div className="custom-select">
      <select onChange={props.handleSelect}>
          <option value="empty">Please choose one option</option>
          {props.options.map((option, index) => {
              return <option key={index} >
                  {option}
              </option>
          })}
      </select>
    </div>

  )
}

export default DropDown