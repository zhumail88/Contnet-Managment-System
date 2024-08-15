import React from 'react'
import SidePanel from './Components/SidePanel'
import HeadPanel from './Components/HeadPanel'
import MainPanel from './Components/MainPanel'

import './App.css'

export default function App1() {
  return (
    <>
      <HeadPanel />
      <ContentArea/>
    </>
  )
}

let ContentArea = () =>{
  return(
    <div className="ContentContainer">
      <SidePanel />
      <MainPanel />
    </div>
  )
}


