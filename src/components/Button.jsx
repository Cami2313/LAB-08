import { useState } from "react"
import "../styles/buttonStyles.css"

export const Button = props => {
    
    const { text } = props
    
    const[count, setCount] = useState(5)
    
    function handlerButton() {
        setCount(count + 50)
    }
    
    return (
        <button onClick={ handlerButton }>
            { text } { count }
        </button>
    )
}
