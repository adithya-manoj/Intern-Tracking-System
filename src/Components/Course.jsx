import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/course/viewCourse');
        console.log(response.data);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchData();
  }, []);

  // Function to chunk the courses array into sets of 3
  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const chunkedCourses = chunkArray(courses, 4);

  return (
    <div className='bg-dark text-white p-2'>
      <h2 className='text-center'>Our Courses</h2>
      <Carousel indicators={false} controls={true} interval={3000}>

        {chunkedCourses.map((courseChunk, index) => (
          <Carousel.Item key={index}>
            <div className='d-flex justify-content-center'>
              {courseChunk.map((item) => (
                <Card key={item._id} style={{ width: '18rem', height: '16rem', margin: '0 10px' }}>
                  <Card.Img 
                    variant="top" 
                    src={`http://localhost:4000/Uploads/Images/${item.course.courseimage}`} 
                    style={{ width: '100%', height: '12rem', objectFit: 'cover' }} 
                  />
                  <Card.Body>
                    <Card.Title>{item.course.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
        
      </Carousel>
    </div>
  );
};

export default Course;






// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Card from 'react-bootstrap/Card';

// const Course = () => {

//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//       const fetchData = async () => {
//           try {
//               const response = await axios.get('http://localhost:4000/course/viewCourse');
//               console.log(response.data)
//               setCourses(response.data);

//           }
//           catch (error) {
//               console.error('Error fetching courses:', error);
//           }

//       }
//       fetchData();
//   }, [])

//   return (
// <div className='bg-dark text-white p-2'>

// <h2 className='text-center'>Our Courses</h2>
// <div className='d-flex flex-wrap justify-content-center'>
//   {courses.map((item) => (
//     <div key={item._id} className='m-3'>
//       <Card style={{ width: '18rem', height: '16rem' }}>
//         <Card.Img 
//           variant="top" 
//           src={http://localhost:4000/Uploads/Images/${item.course.courseimage}} 
//           style={{ width: '100%', height: '12rem', objectFit: 'cover' }} 
//         />
//         <Card.Body>
//           <Card.Title>{item.course.name}</Card.Title>
//         </Card.Body>
//       </Card>
//     </div>
//   ))}
// </div>
// </div>
//  )
// }

// export default Course