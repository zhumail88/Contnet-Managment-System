import React from 'react'
import '../csss/HeadPanel.css'

export default function HeadPanel() {
    const studentEnrollment = '02-131222-055';
    return (
        <div className="MainContainer">
            <div className="logo">
                <img src="./src/assets/BahriaLogo.png" alt="." />
            </div>

            <div className="mainHeading">
                <h1>BAHRIA UNIVERSITY, KARACHI CAMPUS</h1>
            </div>

            <div className="profileInfo">
                <img src="./src/assets/student1Pic.jpg" alt="." />
                <p>{studentEnrollment}</p>
            </div>
        </div>

    )
}
