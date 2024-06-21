import React, { useState } from 'react'

const AdminTrainer = () => {
    let[data,setData]=useState('');

    let handleChange=(event)=>{
        setData({...data,[event.target.name]: event.target.value })
    }

    let handleAdd=()=>{

    }
  return (
    <div>
        
        <div className='text-center'><h2>Trainers</h2></div>
        <div className='p-4'>
            <table className='border border-2 containe'>
               
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Date Joined</th>
                    <th>Status</th>
                    <th>Approve</th>
                    <th>Reject</th>
                </tr>
                
                
                <tr>
                    <td>Adhi</td>
                    <td>MERN</td>
                    <td>15-03-2024</td>
                    <td>ACCEPTED</td>
                    <td>DISABLE</td>
                    <td></td>
                </tr>
               
               
                <tr>
                    <td>Adhi</td>
                    <td>MERN</td>
                    <td>15-03-2024</td>
                    <td></td>
                    <td><button>ACCEPT</button></td>
                    <td><button>REJECT</button></td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default AdminTrainer