import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import StudentSignup from "./Components/StudentSignup";
import AlumniSignup from "./Components/AlumniSignup";
import TypingEffect from "./Components/TypingEffect";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import AlumniDashboard from "./Dashboard/Alumni/AlumniDashboard";
import AdminDashboard from "./Dashboard/Admin/AdminDashboard";
import NotFound from "./Components/NotFound";
import AlumniDirectory from "./Components/AlumniDirectory";
import StudentData from"./Dashboard/Admin/StudentData";
import AlumniData from"./Dashboard/Admin/AlumniData";
import StudentFeedback from"./Feedbacks/StudentFeedback";
import AlumniSurveyForm from "./Feedbacks/AlumniSurveyForm";
import AlumniRegistrationForm from "./Feedbacks/AlumniRegistrationForm"
import AlumniProfile from "./Dashboard/Alumni/AlumniProfile";
import CareerResource from "./Dashboard/Alumni/CareerResource";
import SuccessStory from "./Dashboard/Alumni/SuccessStory";
import UpcomingEvents from "./Dashboard/Alumni/UpcomingEvents";
import Donation from "./Dashboard/Alumni/Donation";
import CrowdFundingPage from "./Dashboard/Alumni/CrowdFundingPage";
import JobPostingForm from "./Dashboard/Alumni/JobPostingForm";
import Internship from "./Dashboard/Alumni/Internship";

import AlumniSlideShow from "./Dashboard/Admin/AlumniSlideShow";
import StudentRegistration from "./Dashboard/Student/StudentRegistration";
import JobPostings from "./Job/Jobportal";
import JobPortal from "./Job/Jobportal";
import InternshipPortal from "./Job/InternshipPortal";
import ResourceLibrary from "./Resources/ResourceLibrary";
import VideoResources from "./Resources/VideoLibrary";
import CollegeEvents from "./EventsAndConf/CollegeEvents";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/typingeffect" element={<TypingEffect />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/alumnidashboard" element={<AlumniDashboard />} />
        <Route path="/studentfeedback" element={<StudentFeedback />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/studentdata" element={<StudentData />} />
        <Route path="/alumnidata" element={<AlumniData />} />
        <Route path="/AlumniSurveyForm" element={<AlumniSurveyForm />} />
        <Route path="/AlumniProfile" element={<AlumniProfile />} />
        <Route path="/CareerResource" element={<CareerResource />} />
        <Route path="/AlumniRegistrationForm" element={<AlumniRegistrationForm />} />
        <Route path="/SuccessStory" element={<SuccessStory />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
        <Route path="/CrowdFundingPage" element={<CrowdFundingPage />} />
        <Route path="/JobPostingForm" element={<JobPostingForm />} />
        <Route path="/Internship" element={<Internship />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/AlumniSlideShow" element={<AlumniSlideShow />} />  
        <Route path="/StudentRegistration" element={<StudentRegistration />} />  
        <Route path="*" element={<NotFound />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/alumni-signup" element={<AlumniSignup />} />
        {/* JOBS */}
        <Route path="/job-portal" element={<JobPortal />} />
        {/* Internships */}
        <Route path="/intern-portal" element={<InternshipPortal />} />
        {/* Resources */}
        <Route path="/ViewMaterials" element={<ResourceLibrary />} />
        <Route path="/ViewVideos" element={<VideoResources />} />
        {/* Events and Conf */}
        <Route path="/events" element={<CollegeEvents />} />
        
      </Routes>
    </Router>
  );
}

export default App;
