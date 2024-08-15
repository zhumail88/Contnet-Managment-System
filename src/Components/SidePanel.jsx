import React from 'react'
import '../csss/SidePanel.css'

export default function SidePanel() {
    const menuItems = [
        'Profile Information',
        'Course Registration',
        'TimeTable',
        'Attendence',
        'Provisional Result',
        'Quality Assurance Survey',
        'Fee Challans',
        'Exam Seating Plan',
        'Community Services',
        'Academic Documents',
        'Offical Documents',
        'Available Scholarships',
        'Microsoft Email Account',
        'Form',
        'LMS',
        'Undertakings',
        'Virtual Suggestion Box',
        'Thesis Dashboard',
        'Convocation Registration',
    ];

    return (
        <>
            <div className="SideContainer">
                
                <div className="buttons">
                    <ul className="menu">
                        {menuItems.map((item, index) => (
                            <li key={index} className="menu-item">
                                <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer">
                    <p>Powered By <b>Bahria University</b></p>
                </div>
            </div>
        </>
    )
}
