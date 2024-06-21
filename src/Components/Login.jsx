import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trainer_dp from '../images/trainer_dp.jpg'


const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [data, setData] = useState({
        name: '',
        date: '',
        course: '',
        username: '',
        password: '',
        usertype: 'trainer'
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/trainers/login', {
                username: data.username,
                password: data.password
            });
            toast.success('Logged in Successfully!!');
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
            toast.error(error.response?.data || 'Login failed!');
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
                            <h2>Login</h2>
                            
                        </div>
                        <div className='col-md-6 p-3 bg-white text-dark rounded-3'>
                            <form onSubmit={handleLogin}>                              
                                
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
                                     LOGIN
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

export default Login;
