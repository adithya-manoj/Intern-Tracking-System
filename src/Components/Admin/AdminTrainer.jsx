import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";

const AdminTrainer = () => {
    let [data, setData] = useState('');
    let [trainers, setTrainers] = useState([]);

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    let handleAdd = () => {
        
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get('http://localhost:4000/trainers/view');
                setTrainers(response.data);
            } catch (error) {
                console.error('Error fetching trainers:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className='text-center'><h2>Trainers</h2></div>
            <div className='p-4'>
                <table className='table table-bordered container'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Date Joined</th>
                            <th>Status</th>
                            <th>Accept/Reject</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainers.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.course}</td>
                                <td>{item.date}</td>
                                <td>ACCEPTED</td>
                                <td>REMOVE</td>
                                <td className='text-center'><MdDelete /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTrainer;
