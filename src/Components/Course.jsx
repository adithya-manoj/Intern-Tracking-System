import React from 'react'
import Card from 'react-bootstrap/Card';

const Course = () => {
  return (
<div className='bg-dark text-white p-2'>

<h2 className='text-center'>Our Courses</h2>
<div>
<div className='m-3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
    
      <Card.Body>
        <Card.Title>MERN</Card.Title>
      </Card.Body>
    </Card>
</div>
</div>
</div>
 )
}

export default Course