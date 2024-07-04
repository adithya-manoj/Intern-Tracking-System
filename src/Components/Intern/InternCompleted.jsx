import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const InternCompleted = () => {
  const [data, setData] = useState([]);
  const user = localStorage.getItem('userId');
  let navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/interns/ViewTaskbyUser/${user}`);
        console.log(response);
        const filteredData = response.data.filter(item => item.status===true)
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
    <div className='p-2'>
      {data.length > 0 ? (
        data.map((task, index) => (
          <Card key={index} style={{ width: '14rem', margin: '1rem auto' }}>
            <Card.Body>
              <Card.Title>{task.question}</Card.Title>
              <Card.Text>
                {task.description}
              </Card.Text>
              <Button variant="primary" onClick={() => ViewQuestion(task)}>View Details</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default InternCompleted;
