import React from 'react'
import '../../csss/SideBarComponents/ProfileInfo.css';


export default function ProfileInfo() {
    return (
        <div>
            <StudentInfo
                enrollment={'02-131222-055'}
                reg={'81933'}
                name={'Zhariq'}
                fatherName={'02-131222-055'}
                age={'21'}
                program={'Accounting and Finance'}
                mobile={'03112665793'}
                email={'shantiqa3@gmail.com'}
                address={'Isalamabad'}
                src={'./src/assets/student1pic.jpg'}
            />
        </div>
    )
}

var StudentInfo = (props) => {
    return (
        <>
            <div className="profileInfoHeading">
                <h1>PROFILE INFORMATION</h1>
            </div>
            <hr />
            <div className="profileInformation">
                <div className="StudentInfo">
                    <p>Enrollment : <b>{props.enrollment}</b></p>
                    <p>Registration : <b>{props.reg}</b></p>
                    <p>Name : <b>{props.name}</b></p>
                    <p>Father Name : <b>{props.fatherName}</b></p>
                    <p>Age : <b>{props.age}</b></p>
                    <p>Program : <b>{props.program}</b></p>
                    <p>Mobile Number : <b>{props.mobile}</b></p>
                    <p>Email : <b>{props.email}</b></p>
                    <p>Address : <b>{props.address}</b></p>
                </div>
                <div className="profileInfoPicture">
                    <img src={props.src} alt="." />
                </div>
            </div>
        </>
    )
}
