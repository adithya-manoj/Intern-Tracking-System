import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const InternAssigned = () => {
  const [data, setData] = useState([]);
  const user = localStorage.getItem('userId');
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/interns/ViewTaskbyUser/${user}`);
        console.log(response);
        const filteredData = response.data.filter(item => item.status===false)
        setData(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  const ViewQuestion = (question) => {
    navigate('/intern/InternQuestion', { state: { question } });
  };

  return (
    <div className='p-3'>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card key={index} style={{ width: '11rem', marginBottom: '10px' }}>
            <Card.Body>
              <Card.Title>{item.question}</Card.Title>
              <Button variant="primary" onClick={() => ViewQuestion(item)}>View Task</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default InternAssigned;
