import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const InternQuestion = () => {
    const location = useLocation();
    const { question } = location.state || {};
    const [answer, setAnswer] = useState('');
    const [questionId, setQuestionId] = useState('');

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:4000/interns/updateAnswer', {
                questionId: question._id,
                answer: answer
            });
    
            console.log('Answer submitted successfully:', response.data);
    
            toast.success('Answer Submitted Successfully');

        } catch (error) {
                console.error('Error message:', error.message);
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
                theme="light"
            />
            <div className='p-3 m-2'>
                <h2>Task</h2>
            </div>

            <div className='p-3 m-2'>
                {question && (
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <th>Question</th>
                                <td>{question.question}</td>
                                
                            </tr>
                            <tr>
                                <th>Notes</th>
                                <td>{question.notes}</td>
                            </tr>
                            <tr>
                                <th>Files</th>
                                <td>{question.files}</td>
                            </tr>
                            <tr>
                                <th>Link</th>
                                <td><a href={question.link} target="_blank" rel="noopener noreferrer">{question.link}</a></td>
                            </tr>
                            <tr>
                                <th>Deadline</th>
                                <td>{question.deadline}</td>
                            </tr>
                            <tr>
                                <th>Answer</th>
                                <td><input type="text" placeholder='Answer Link' className="form-control" onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-end">
                                    <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default InternQuestion;
