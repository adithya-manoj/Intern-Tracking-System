import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const TrainerAnsInterns = () => {
    const location = useLocation();
    let [data, setData] = useState([]);
    const { question } = location.state || {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/interns/ViewTaskbyQuestion/${question}`);
                console.log(response);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching interns:', error);
            }
        };
        if (question) {
            fetchData();
        }
    }, [question]);

    return (
        <div className="container mt-4">
            <h2>Question: {question || 'No question provided'}</h2>
            <table className="table table-striped table-bordered mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Answer</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.intern}</td>
                            <td>{item.task}</td>
                            <td>{item.mark}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainerAnsInterns;
