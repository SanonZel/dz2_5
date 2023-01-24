import { UseContext, useState } from 'react'
import LanguageCom from './LanguageComp'
import './App.css'
import { LangContext, TempContext } from './contains'
import Lang from './Lang'
import LanguageComp from './LanguageComp'
import Tempetatura from './Tempetatura'



function App() {
  const [lang,setLang]= useState('French')
  const FranchCount = () =>{
    setLang("French")
  }
  const EnglishCount = () =>{
    setLang("English")
  }
   const [temp,setTemp]=useState(10)
  const handleChangeTemp = ()=>{
      setTemp(Math.floor(Math.random() * 40))
  }
  return (
    <div className="App" style={{gap: 40}}> 
             <LangContext.Provider value={{
            FranchCount, EnglishCount ,lang
        }}>
          <TempContext.Provider value={{handleChangeTemp,temp}}>
             <Tempetatura/>
          </TempContext.Provider>
            <Lang/>
            <LanguageComp/>
        </LangContext.Provider>
    </div>
  )
}

export default App
