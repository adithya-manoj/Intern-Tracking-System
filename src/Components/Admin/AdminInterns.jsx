import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminInterns = () => {

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


    const deleteIntern = async (id) => {
        try {
            await axios.post('http://localhost:4000/interns/deleteIntern', { id: id });
            setInterns(interns.filter(intern => intern._id !== id));
            toast.success('Intern Removed Successfully!');
        } catch (error) {
            console.error('Error removing Intern:', error);
            toast.error('Unable to remove Intern!');
        }
    };


    const handleChange = (event, index) => {
        const updatedInterns = [...interns];
        updatedInterns[index] = { ...updatedInterns[index], [event.target.name]: event.target.value };
        setInterns(updatedInterns);
        console.log(updatedInterns);
    };

    const handleStatus = async (id, status) => {
        console.log(id, status);
        await axios.patch('http://localhost:4000/interns/statusIntern', { id, status })
    }

    const handleSubmit = async ()=>{
        let response = await axios.put('http://localhost:4000/interns/updateInterns',interns)
    }

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
                            <th>Status</th>
                            <th>Accept/Reject</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interns.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.course}</td>
                                <td>{item.date}</td>
                                <td>
                                <input type="text"
                                        name="fees"
                                        value={item.fees}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    </td>
                                <td>
                                    <select name="trainer" value={item.trainer} onChange={(e) => handleChange(e, index)}>
                                        {trainers.map((trainer, idx) => (
                                            <option key={idx} value={trainer._id}>{trainer.name}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>{item.status ? 'Approved' : 'Pending'}</td>

                                <td className='text-center'>
                                    <button className={`btn w-50 ${item.status ? 'btn-danger' : 'btn-success'}`} onClick={() => handleStatus(item._id, !item.status)}>

                                        {item.status ? 'Reject' : 'Accept'}
                                    </button>
                                </td>


                                <td className='text-center' style={{ 'cursor': 'pointer' }} onClick={() => deleteIntern(item._id)}>
                                    <MdDeleteForever />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><button className='bg-success rounded-2' onClick={handleSubmit}>Save Changes</button></div>
            </div>
        </div>
    );
};

export default AdminInterns;
