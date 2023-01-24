import { useContext } from "react"
import { LangContext } from "./contains"

function Lang() {
  const {lang}=useContext(LangContext)
  return (
    <div style={{marginTop: 30}}>{lang}</div>
  )
}

export default Lang