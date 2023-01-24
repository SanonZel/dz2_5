import React from 'react'
import { useContext } from 'react'
import {  LangContext } from './contains'

const LanguageComp = () => {
    const {EnglishCount, FranchCount} = useContext(LangContext);
    return (
        <div>
            <button onClick={EnglishCount} style={{marginRight: 20, marginTop: 20}}>english</button>
            <button onClick={FranchCount}>franch</button>
        </div>
      )
}


export default LanguageComp