import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TrainerIntern = () => {
    const [interns, setInterns] = useState([]);
    const [myInterns, setMyInterns] = useState([]);
    const navigate= useNavigate()

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        const fetchInterns = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/interns/viewAssignedIntern/${userId}`);
                // const Interns = response.data;
                setInterns(response.data);
                console.log(response.data);

            } catch (e) {
                console.error('Error fetching interns:', e);
            }
        }
        fetchInterns();
    }, []);

    const handleSelectedIntern = (internid) => {
        setMyInterns((prevSelected)=>{
            if(prevSelected.includes(internid)){
                return prevSelected.filter((id)=> id !==internid)
            }
            else{
                return [...prevSelected,internid]
            }
        })
    }
    let handleSubmit=()=>{
        navigate('/trainer/AssignTask', {state:{myInterns}})
    }

    return (
        <div>
            <div className='p-3 m-2'>
                <h2>Interns</h2>
            </div>
            <div className='d-flex justify-content-between p-3 m-2'>
                <input type="text" name='searchIntern' placeholder='Search Interns' className='rounded-2' />
                <button className='bg-primary rounded-2' onClick={handleSubmit}>ASSIGN</button>
            </div>
            <div className='p-3 m-2'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Date Joined</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interns.map((item) => (
                            <tr key={item._id}>
                                <td><input type="checkbox" onChange={()=>handleSelectedIntern(item._id)} /></td>
                                <td>{item.name}</td>
                                <td>{item.course}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TrainerIntern;
