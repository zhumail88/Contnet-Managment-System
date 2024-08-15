import React from 'react'
import '../csss/MainPanel.css'
import '../csss/SidePanel.css'
import ProfileInfo from './SideBarComponents/ProfileInfo'

export default function MainPanel() {
  return (
    <>
        <div className="ContentArea">
            <ProfileInfo />
        </div>
    </>    
  )
}

