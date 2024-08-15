import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidePanel from './Components/SidePanel';
import HeadPanel from './Components/HeadPanel';
import MainPanel from './Components/MainPanel'; // This component could act as a default or fallback
import ProfileInfo from './Components/SideBarComponents/ProfileInfo.jsx';
import CourseRegistration from './Components/SideBarComponents/CourseRegistration.jsx';
import './App.css';
import OpeningPage from './Components/OpeningPage.jsx';

export default function App1() {
  return (
    <Router>
      <HeadPanel />
      <ContentArea />
    </Router>
  );
}

const ContentArea = () => {
  return (
    <div className="ContentContainer">
      <SidePanel />
      <div className="MainContent">
        <Routes>
          <Route path="/" element={<OpeningPage />} /> Default route
          <Route path="/profile-information" element={<ProfileInfo />} />
          <Route path="/course-registration" element={<CourseRegistration />} />
        </Routes>
      </div>
    </div>
  );
};
