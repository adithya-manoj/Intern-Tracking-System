import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";

const AdminInterns = () => {
    let[data,setData]=useState('');
    let[interns,setInterns]=useState('');

    let handleChange=(event)=>{
        setData({...data,[event.target.name]: event.target.value })
    }

    let handleAdd=()=>{

    }

    useEffect(()=>{
        let fetchData=async()=>{
            let response =await axios.get('http://localhost:4000/interns/viewIntern');
            console.log(response);
                setInterns(response.data);
        }
        fetchData();
    },[])

  return (
    <div>
        
        <div className='text-center'><h2>Interns</h2></div>
        <div className='p-4'>
            <table className='border border-2'>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Date Joined</th>
                    <th>Fees Paid</th>
                    <th>Trainer</th>
                    <th>Remove</th>
                </tr>
                {interns.map((item)=>
                (
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>{item.date}</td>
                    <td>30000</td>
                    <td>
                        <select name="trainer" id="">
                        <option value="Manu"></option>
                        <option value="Sneha"></option>
                        </select></td>
                    <td><MdDeleteForever /></td>
                </tr>
                ))}
                
                <tr>
                    <td>Anjusha K</td>
                    <td>MERN</td>
                    <td>15-03-2024</td>
                    <td>40000</td>
                    <td><button>SNEHA</button></td>
                    <td><button><MdDeleteForever /></button></td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default AdminInterns