import React from 'react';
import Intern from '../images/intern.jpg';
import { Link } from 'react-router-dom';

export const LoginButton = () => {
  const divStyle = {
    backgroundImage: `url(${Intern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '80vh',
  };

  return (
    <div style={divStyle} className='d-flex justify-content-center align-items-center'>
     

      <button className='rounded-4 px-4'>
      <Link to='/login'>
        Login
      </Link>

        </button>
      
    </div>
  );
};
