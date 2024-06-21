import React from 'react'

const TrainerIntern = () => {
    return (
        <div>
            <div>
                <h2>Interns</h2>
            </div>
            <div className='d-flex justify-content-between'>
                <input type="text" name='searchIntern' />
                <button className='bg-primary rounded-2'>ASSIGN</button>
            </div>
            <div>
                <table className='border border-2'>
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Date Joined</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>{item.name}</td>
                        <td>{item.course}</td>
                        <td>{item.date}</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default TrainerIntern