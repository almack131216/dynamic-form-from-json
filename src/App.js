import { useState, useEffect } from "react"
import Element from "./components/Element"
import formJSON from "./formElement.json"
import { FormContext } from "./components/FormContext"

console.log(formJSON)

function App() {
  const [elements, setElements] = useState(null)

  useEffect(() => {
    setElements(formJSON[0])
  }, [])

  const { fields, page_label } = elements ?? {}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit: ", elements)
  }

  const handleChange = (id, e) => {
    console.log("handleCgange")
    const newElements = { ...elements }
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = e.target.checked
            break

          default:
            field["field_value"] = e.target.value
            break
        }
      }
      setElements(newElements)
    })
    console.log(elements)
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className='container'>
        <h3>{page_label}</h3>
        <form>
          {fields
            ? fields.map((field, i) => <Element key={i} field={field} />)
            : null}

          <button
            onClick={(e) => handleSubmit(e)}
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </form>
      </div>
    </FormContext.Provider>
  )
}

export default App
