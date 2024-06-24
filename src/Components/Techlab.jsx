import React from 'react';
import { PiOfficeChairBold } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import './Techlab.css';


const Techlab = () => {
    return (
        <div>
            <div className='headcontainer'>
            <div><h1>Techno TechLab</h1></div>
            <div><h4>is an interesting platform that will teach your education in more an interactive way</h4></div>
            </div>
            <div className='cardcontainer'>
                <div className='techcard'>
                    <div className='icon'><PiOfficeChairBold /></div>
                    <div><h4>Placement Assurance</h4></div>
                    <div>Our mission is to provide 100% placements to students those who enrol for our specialised courses. Our Placement assistance starts with Resume preparation, Mock Interviews by real working professionals, Aptitude test training & Interviews.</div>
                </div>
                <div className='techcard'>
                    <div className='icon'><TbCertificate /></div>
                    <div><h4>Certification</h4></div>
                    <div>Our commitment goes beyond knowledge. We offer comprehensive exam preparation support to ensure you achieve your desired certification. This includes access to industry-recognized learning materials, practice exams, and personalized guidance from our certified instructors.</div>
                </div>
                <div className='techcard'>
                    <div className='icon'><FaChalkboardTeacher /></div>
                    <div><h4>Placement assurance</h4></div>
                    <div>Our faculty is comprised of seasoned professionals with extensive industry experience. They are passionate about knowledge transfer and committed to your success. This ensures you receive not only theoretical knowledge but also practical insights and real-world applications.</div>
                </div>
            </div>
        </div>
    )
}

export default Techlab