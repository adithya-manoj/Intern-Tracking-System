import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';

const Trainers = () => {
const [trainers,setTrainers] = useState([]);
  useEffect(()=>{
    const fetchData= async()=>{
      try{
let response= await axios.get('http://localhost:4000/trainers/view')
console.log(response);
setTrainers(response.data);

      }
      catch(e){
        console.error('Error fetching data:', e);
      }
    }
fetchData();
  },[])

  return (
   <>
   <div className='bg-dark text-white p-2'>
   <h2 className='text-center'>Our Trainers</h2>
   <div>
<div className='m-3 d-flex gap-2'>
  {trainers.map((item)=>(

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
    
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.course}</Card.Text>
      </Card.Body>
    </Card>
))}
</div>
</div>
   </div>
   </>
  )
}

export default Trainers