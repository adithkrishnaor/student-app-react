import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStudent/>} />
        <Route path='/deletestudent' element={<DeleteStudent/>} />
        <Route path='/searchstudent' element={<SearchStudent/>} />
        <Route path='/viewall' element={<ViewAll/>} />
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
