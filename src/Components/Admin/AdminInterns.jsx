import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminInterns = () => {
    const [data, setData] = useState({});
    const [interns, setInterns] = useState([]);
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/interns/viewIntern');
                setInterns(response.data);
            } catch (error) {
                console.error('Error fetching interns:', error);
            }
        };

        const fetchTrainers = async () => {
            try {
                const trainerResponse = await axios.get('http://localhost:4000/trainers/view');
                setTrainers(trainerResponse.data);
            } catch (error) {
                console.error('Error fetching trainers:', error);
            }
        };

        fetchData();
        fetchTrainers();
    }, []);

    const handleChange = (event, index) => {
        const updatedInterns = [...interns];
        updatedInterns[index] = {
            ...updatedInterns[index],
            [event.target.name]: event.target.value
        };
        setInterns(updatedInterns);
    };

    const deleteIntern = async (id) => {
        try {
            await axios.post('http://localhost:4000/interns/deleteIntern', { id: id });
            // setInterns(interns.filter(intern => intern._id !== id));
            toast.success('Intern Removed Successfully!');
        } catch (error) {
            console.error('Error removing Intern:', error);
            toast.error('Unable to remove Intern!');
        }
    };

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
            <div className='text-center'><h2>Interns</h2></div>
            <div className='p-4'>
                <table className='table table-bordered '>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Date Joined</th>
                            <th>Fees Paid</th>
                            <th>Trainer</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interns.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.course}</td>
                                <td>{item.date}</td>
                                <td>30000</td>
                                <td>
                                    <select name="trainer" value={item.trainer} onChange={(e) => handleChange(e, index)}>
                                        {trainers.map((trainer, idx) => (
                                            <option key={idx} value={trainer.name}>{trainer.name}</option>
                                        ))}
                                    </select>
                                </td>
                                <td className='text-center' onClick={() => deleteIntern(item._id)}><MdDeleteForever /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <div><button className='bg-success rounded-2'>Save Changes</button></div>
            </div>
        </div>
    );
};

export default AdminInterns;
