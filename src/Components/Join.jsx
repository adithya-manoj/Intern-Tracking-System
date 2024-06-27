import React from 'react';
import './Join.css'; // Import the CSS file

const Join = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100 bg-image'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-8 col-lg-10 text-center p-2 p-md-5 text-white rounded shadow'>
          <h1 className='mb-4'>
            So why wait? Start one of our high quality courses from the world's leading experts today!
          </h1>
          <p className='mb-4'>
            If You Have Any Questions Call Us / Whatsapp On +91 90480 36076
          </p>
          <button className='btn btn-primary'>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
