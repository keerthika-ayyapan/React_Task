import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Student from './pages/student/Student';
import Studentlist from './pages/student/Studentlist';
import Functionmain from './components/class/function/function/Functionmain';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Layout />}>
<Route path='/student' element={<Student />}></Route>
<Route path='/list' element={<Studentlist />}></Route>
<Route path='/student/:id' element={<Student />}></Route>
<Route path='/functionmain' element={<Functionmain />}></Route>

</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

