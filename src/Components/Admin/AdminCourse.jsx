import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AdminCourse = () => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response = await axios.get('http://localhost:4000/course/viewCourse');
                setCourses(response.data);
                
        }
        catch(error){
            console.error('Error fetching courses:', error);
        }
    
    }
    fetchData();
    },[])
    

    let [data, setData] = useState({
        name: '',
        syllabus: '',
        courseimage:''
    });

    let handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    
    let handleFile=(event)=>{
        setData({...data,[event.target.name]:event.target.files[0]})
        console.log(data);
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            let formData=new FormData();
            for (const key in data){
                if(data[key]){
                  formData.append(key,data[key]);
                }
              }
              console.log(formData);

            let response = await axios.post('http://localhost:4000/course/addCourse', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }})
                toast.success('Course Added Successfully!!');
            
        }
        catch (error) {
            console.log(error.response);
            toast.error(error.response?.data || 'Unable to add course!');
        }

    }

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
            <div><h2>Add Course</h2></div>
            <div className="container mt-5">
                <form>
                    <div className="form-group row w-50 p-1">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row w-50 p-1">
                        <label htmlFor="syllabus" className="col-sm-2 col-form-label">Syllabus:</label>
                        <div className="col-sm-10">
                            <input type="file"
                                className="form-control-file"
                                id="syllabus"
                                name="syllabus"
                                onChange={handleFile}
                            />
                        </div>
                    </div>
                    <div className="form-group row w-50 p-1">
                        <label htmlFor="Image" className="col-sm-2 col-form-label">Image:</label>
                        <div className="col-sm-10">
                            <input type="file"
                                className="form-control-file"
                                id="courseimage"
                                name="courseimage"
                                onChange={handleFile}
                                accept='image/*'
                            />
                        </div>
                    </div>
                    <div className='p-1'><button type='submit' className="btn btn-primary" onClick={handleAdd}>Add</button></div>
                </form>
            </div>

            <div className='text-center'><h2>Courses</h2></div>
            <div className='p-4'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Syllabus</th>
                            <th>Students</th>
                            <th>Trainers</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(
                            (item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.syllabus}</td>
                                <td>15</td>
                                <td>Adhi</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>)
                        )}
                        
                            
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminCourse;
