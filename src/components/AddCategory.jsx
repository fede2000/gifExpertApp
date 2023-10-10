import { useState } from "react"

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("One Punch")
    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputValue(target.value)
    }

const onSubmit = ( event ) => {
    event.preventDefault()

    if(inputValue.trim().length <= 1 ) return;
    console.log(inputValue)
    onNewCategory(inputValue.trim())
    setInputValue("")

}

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input type="text" placeholder="Buscar Gifs" value={ inputValue} onChange={onInputChange}></input>
    </form>
  )
}

export default AddCategory