import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trainer_dp from '../../images/trainer_dp.jpg';

const InternRegister = () => {
    const [courses, setCourses] = useState([]);
    const [data, setData] = useState({
        name: '',
        date: '',
        course: '',
        username: '',
        password: '',
        usertype: 'intern'
    });

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:4000/course/viewCourse');
                setCourses(response.data);
                
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);


    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/interns/register', data);
            setData({
                name: '',
                date: '',
                course: '',
                username: '',
                password: '',
                usertype: 'intern',
                status: false,
                fees:'0'
            });
            toast.success('Registered Successfully!!');
        } catch (error) {
            console.error('There was an error!', error);
            toast.error(error.response?.data || 'Registration failed!');
        }
    };

    return (
        <>
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
                theme="light"
            />
            <div className='bg-dark p-5 vh-100'>
                <div className='container-fluid vh-75'>
                    <div className='row'>
                        <div className='col-md-6 p-3 bg-dark text-white d-flex flex-column align-items-center justify-content-center'>
                            <img src={Trainer_dp} alt="Trainer" className='w-25 h-25 rounded-circle' />
                            <h2>Intern Register</h2>
                        </div>
                        <div className='col-md-6 p-3 bg-white text-dark rounded-3'>
                            <form onSubmit={handleRegister}>
                                <div className='mb-3'>
                                    <input
                                        type="text"
                                        placeholder='Name'
                                        name='name'
                                        className='form-control rounded-pill'
                                        onChange={handleChange}
                                        value={data.name}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <input
                                        type="date"
                                        name='date'
                                        className='form-control rounded-pill'
                                        onChange={handleChange}
                                        value={data.date}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <select
                                        name='course'
                                        className='form-control rounded-pill'
                                        onChange={handleChange}
                                        value={data.course}
                                    >
                                        <option value=''>Select Course</option>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course.name}>
                                                {course.course.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <input
                                        type="text"
                                        placeholder='Username'
                                        name='username'
                                        className='form-control rounded-pill'
                                        onChange={handleChange}
                                        value={data.username}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <input
                                        type="password"
                                        placeholder='Password'
                                        name='password'
                                        className='form-control rounded-pill'
                                        onChange={handleChange}
                                        value={data.password}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <button type="submit" className='btn btn-dark text-white w-100 rounded-pill'>
                                        REGISTER
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InternRegister;
