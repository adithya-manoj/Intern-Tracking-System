import axios from 'axios';
import React, { useEffect, useState } from 'react';
import image from '../images/footerrr.jpg';
import './Footer.css';

const Footer = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/course/viewCourse');
        setCourses(response.data);
        console.log(response.data,'footer');
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className='footer py-4 text-black'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-6 mb-4 mb-md-0'>
            <h3 className='footer-title'>COURSES</h3>
            <ul className='list-unstyled'>
              {courses.map((item) => (
                <li key={item._id}><a href='#'>{item.course.name}</a></li>
              ))}
            </ul>
          </div>
          <div className='col-md-4 col-sm-6 mb-4 mb-md-0'>
            <h3 className='footer-title text-black'>USEFUL LINKS</h3>
            <ul className='list-unstyled'>
              <li><a href='#'>Teachers & Staff</a></li>
              <li><a href='#'>Gallery</a></li>
              <li><a href='#'>Our Courses</a></li>
              <li><a href='#'>Refund & Cancellation Policy</a></li>
              <li><a href='#'>Certification & Affiliation</a></li>
            </ul>
          </div>
          <div className='col-md-4'>
            <h3 className='footer-title'>CONTACT US</h3>
            <p>Email: <a href='mailto:technolab@outlook.com'>technolab@outlook.com</a></p>
            <p>Phone: <a href='tel:+9190480036076'>+91 90480 036076</a></p>
            <p>Address: Sixth-Phase, Koramangala, Bengaluru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
