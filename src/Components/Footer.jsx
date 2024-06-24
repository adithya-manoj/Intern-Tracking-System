import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Footer = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
      const fetchCourses = async () => {
          try {
              const response = await axios.get('http://localhost:4000/course/viewCourse');
              setCourses(response.data);
          } catch (error) {
              console.error('Error fetching courses:', error);
          }
      };
      fetchCourses();
  }, []);

  return (
    <div className='bg-dark text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-6'>
            <h3>COURSES</h3>
            <ul className='list-unstyled'>
              {courses.map((item)=>(
                <li><a href='#'>{item.name}</a></li>
              ))}
             
            </ul>
          </div>
          <div className='col-md-4 col-sm-6'>
            <h3>USEFUL LINKS</h3>
            <ul className='list-unstyled'>
              <li><a href='#'>Teachers & Staff</a></li>
              <li><a href='#'>Gallery</a></li>
              <li><a href='#'>Our Courses</a></li>
              <li><a href='#'>Refund & Cancellation Policy</a></li>
              <li><a href='#'>Certification & Affiliation</a></li>
            </ul>
          </div>
          <div className='col-md-4'>
            <h3>CONTACT US</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
