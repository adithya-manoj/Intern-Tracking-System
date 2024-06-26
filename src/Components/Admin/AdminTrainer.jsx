import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { MdDelete } from "react-icons/md";

const AdminTrainer = () => {
    let [data, setData] = useState('');
    let [trainers, setTrainers] = useState([]);

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    let handleStatus = async(id,status)=>{
        await axios.patch('http://localhost:4000/trainers/status',{id,status})


    }
    let handleDelete = async (id) => {
        try {
            console.log(id);
            await axios.post('http://localhost:4000/trainers/delete', { id: id });
            setTrainers(trainers.filter( trainers=> trainers._id !== id));
            toast.success('Intern Removed Successfully!');
        }
        catch (error) {
            console.error('Error removing Intern:', error);
            toast.error('Unable to remove Intern!');
        }

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                                <td>{item.status?'Approved':'Pending'}</td>
                                
                                <td className='text-center'>
                                    <button className={`btn w-50 ${item.status ? 'btn-danger' : 'btn-success'}`}onClick={() => handleStatus(item._id, !item.status)}>
                                            
                                        {item.status?'Reject':'Accept'}
                                    </button>
                                
                                </td>
                                <td className='text-center ' style={{'cursor':'pointer'}} onClick={()=>handleDelete(item._id)}><MdDelete /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTrainer;
