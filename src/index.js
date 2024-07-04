import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import TrainerRegister from './Components/Trainer/TrainerRegister';
import TrainerNav from './Components/Trainer/TrainerNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InternRegister from './Components/Intern/InternRegister';
import Login from './Components/Login';
import AdminNav from './Components/Admin/AdminNav';
import AdminHome from './Components/Admin/AdminHome';
import AdminTrainer from './Components/Admin/AdminTrainer';
import AdminInterns from './Components/Admin/AdminInterns';
import AdminCourse from './Components/Admin/AdminCourse';
import InternNav from './Components/Intern/InternNav';
import InternHome from './Components/Intern/InternHome';
import InternAssigned from './Components/Intern/InternAssigned';
import InternCompleted from './Components/Intern/InternCompleted';
import TrainerIntern from './Components/Trainer/TrainerIntern';
import TrainerAssign from './Components/Trainer/TrainerAssign';
import TrainerTasks from './Components/Trainer/TrainerTasks';
import TrainerAnsInterns from './Components/Trainer/TrainerAnsInterns';
import InternQuestion from './Components/Intern/InternQuestion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<App/>}></Route>
    <Route path='/TrainerRegister' element={<TrainerRegister/>}></Route>
    <Route path='/InternRegister' element={<InternRegister/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

    <Route path='/admin' element={<AdminNav/>}>
          <Route index element={<AdminHome/>}/>
          <Route path='AdminTrainer' element={<AdminTrainer/>}/>
          <Route path='AdminInterns' element={<AdminInterns/>}/>
          <Route path='AdminCourse' element={<AdminCourse/>}/>
    </Route>

    <Route path='/trainer' element={<TrainerNav/>}>
          <Route index element={<InternHome/>}/>
          <Route path='TrainerInterns' element={<TrainerIntern/>}/>
          <Route path='AssignTask' element={<TrainerAssign/>}/>
          <Route path='TrainerTasks' element={<TrainerTasks/>}/>
          <Route path='TrainerAnsInterns' element={<TrainerAnsInterns/>}/>

    </Route>
    <Route path='/intern' element={<InternNav/>}>
          <Route index element={<InternHome/>}/>
          <Route path='AssignedTasks' element={<InternAssigned/>}/>
          <Route path='CompletedTasks' element={<InternCompleted/>}/>
          <Route path='CompletedTasks' element={<InternCompleted/>}/>
          <Route path='InternQuestion' element={<InternQuestion/>}/>
    </Route>


    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
