import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrainerAnsInterns = () => {
    const location = useLocation();
    const { question } = location.state || {};

    return (
        <div className="container mt-4">
            <h2>Interns for Question: {question}</h2>
            <table className="table table-striped table-bordered mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Task</th>
                        <th>Answer</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Intern Name</td>
                        <td>Course Name</td>
                        <td>{question}</td>
                        <td>Answer</td>
                        <td>Mark</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TrainerAnsInterns;
