import React from 'react'

const TrainerTasks = () => {
  return (
    <div>
        <div className='p-3 m-2'>
                <h2>Tasks</h2>
            </div>
        <div className='p-3 m-2'>
        <table className='table table-bordered'>
                    <tr>
                        
                        <th>Question</th>
                        <th>Deadline</th>
                        <th>Document</th>
                        <th>Notes</th>
                        <th>Link</th>
                        <th>Interns</th>

                    </tr>
                    
                    <tr>
                        
                        <td>Name</td>
                        <td>Deadline</td>
                        <td>Document</td>
                        <td>Notes</td>
                        <td>Link</td>
                        <td><button className='btn btn-primary'>Interns</button></td>
                    </tr>
                    <tr>
                        
                        <td>Name</td>
                        <td>Deadline</td>
                        <td>Document</td>
                        <td>Notes</td>
                        <td>Link</td>
                        <td><button className='btn btn-primary'>Interns</button></td>
                    </tr>
                    <tr>
                        
                        <td>Name</td>
                        <td>Deadline</td>
                        <td>Document</td>
                        <td>Notes</td>
                        <td>Link</td>
                        <td><button className='btn btn-primary'>Interns</button></td>
                    </tr>
                   
                </table>
        </div>
    </div>
  )
}

export default TrainerTasks