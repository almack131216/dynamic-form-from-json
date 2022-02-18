import { useContext } from "react"
import { FormContext } from "../FormContext"

const Select = ({ field_id, field_label, field_options }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <>
      <label>{field_label}</label>
      <select
        className='form-select'
        onChange={(e) => handleChange(field_id, e)}
      >
        <option>Choose...</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option key={i} value={option.option_label}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  )
}

export default Select
