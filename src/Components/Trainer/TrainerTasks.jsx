import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrainerTasks = () => {
    const [interns, setInterns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/interns/ViewTask');

                const uniqueQuestions = [];
                const filteredData = response.data.filter((item) => {
                    if (!uniqueQuestions.includes(item.question)) {
                        uniqueQuestions.push(item.question);
                        return true;
                    }
                    return false;
                });

                setInterns(filteredData);
                console.log(filteredData);
            } catch (e) {
                console.error('Error fetching interns:', e);
            }
        }
        fetchData();
    }, []);

    const handleNavigate = (question) => {
        navigate('/trainer/TrainerAnsInterns', { state: { question } });
    };

    return (
        <div>
            <div className='p-3 m-2'>
                <h2>Tasks</h2>
            </div>
            <div className='p-3 m-2'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Deadline</th>
                            <th>Document</th>
                            <th>Notes</th>
                            <th>Link</th>
                            <th>Interns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interns.map((item, index) => (
                            <tr key={index}>
                                <td>{item.question}</td>
                                <td>{item.deadline}</td>
                                <td>{item.file}</td>
                                <td>{item.notes}</td>
                                <td>{item.link}</td>
                                <td>
                                    <button 
                                        className='btn btn-primary'
                                        onClick={() => handleNavigate(item.question)}
                                    >
                                        Interns
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TrainerTasks;
