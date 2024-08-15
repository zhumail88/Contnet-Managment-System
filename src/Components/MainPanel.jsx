import React from 'react'
import '../csss/MainPanel.css'
import OpeningPage from './OpeningPage'
import '../csss/SidePanel.css'

export default function MainPanel() {
  return (
    <>
        <div className="ContentArea">
            <OpeningPage/>
        </div>
    </>    
  )
}

