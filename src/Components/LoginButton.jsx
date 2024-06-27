import React from 'react';
import image from '../images/internss.jpg';

export const LoginButton = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='row w-100'>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center mb-4 mb-md-0'>
          <h1>Unleash Your Potential.</h1>
          <h1>Embrace Change.</h1>
          <h5>
            We tailor our programs to your specific needs, ensuring you gain the skills needed to succeed.
          </h5>
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-end align-items-center vh-75'>
          <img src={image} alt="Internship" className='img-fluid w-100 vh-100' />
        </div>
      </div>
    </div>
  );
};
