import React, { useState, useRef } from 'react';
import FileBase64 from 'react-file-base64';
import './TrainerAssign.css'

const TrainerAssign = () => {
  const [formData, setFormData] = useState({
    question: '',
    deadline: '',
    file: null,
    link: ''
  });

  const fileInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileDone = (file) => {
    setFormData(prevState => ({
      ...prevState,
      file: file.base64 // Assuming you need the base64 representation
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/assign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
    <div className="container">
      <div className='form-container w-50 mx-auto'>
        <div>
          <input
            type="text"
            name="question"
            placeholder='Question'
            value={formData.question}
            onChange={handleInputChange}
            className='m-2 p-3 rounded-3 w-100'
          />
        </div>
        <div>
          <input
            type="text"
            name="deadline"
            placeholder='Deadline'
            value={formData.deadline}
            onChange={handleInputChange}
            className='m-2 p-3 rounded-3 w-100'
          />
        </div>
        <div className='m-2 p-3 rounded-3 border border-2 border-black w-100'>
          <FileBase64
            ref={fileInputRef}
            id="QuestionDoc"
            onDone={handleFileDone}
            name="QuestionDoc"
            className=''
          />
        </div>
        <div><input
            type="text"
            name="notes"
            placeholder='notes'
            value={formData.notes}
            onChange={handleInputChange}
            className='m-2 p-3 rounded-3 w-100'
          /></div>
        <div>
          <input
            type="text"
            name="link"
            placeholder='Link'
            value={formData.link}
            onChange={handleInputChange}
            className='m-2 p-3 rounded-3 w-100'
          />
        </div>
        <div className='w-100'>
          <button onClick={handleSubmit} className='m-2 p-2 btn btn-primary rounded-3'>Assign</button>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default TrainerAssign;
