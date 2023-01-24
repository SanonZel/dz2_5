import { useContext } from "react"
import { TempContext } from "./contains"

function Tempetatura() {
    const {temp,handleChangeTemp}= useContext(TempContext)
  return (
    <div>
        <h1> temperatura: {temp}*C</h1>
        <button onClick={handleChangeTemp}>менять температуру</button>
    </div>
  )
}

export default Tempetatura