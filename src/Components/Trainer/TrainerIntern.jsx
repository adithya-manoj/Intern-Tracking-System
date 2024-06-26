import React from 'react';
import { Link } from 'react-router-dom';

const TrainerIntern = () => {
    return (
        <div>
            <div className='p-3 m-2'>
                <h2>Interns</h2>
            </div>
            <div className='d-flex justify-content-between p-3 m-2'>
                <input type="text" name='searchIntern' placeholder='Search Interns' className='rounded-2' />
                <Link to='AssignTask'><button className='bg-primary rounded-2' >ASSIGN</button></Link>
                
            </div>
            <div className='p-3 m-2'>

                <table className='table table-bordered'>
                    <tr>
                        <th >Select</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Date Joined</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>item.name</td>
                        <td>item.course</td>
                        <td>item.date</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>item.name</td>
                        <td>item.course</td>
                        <td>item.date</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>item.name</td>
                        <td>item.course</td>
                        <td>item.date</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default TrainerIntern