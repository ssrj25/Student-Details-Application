import logo from './logo.svg';
import './App.css';

//components
import AddStudent from './components/AddStudent'
import NavBar from './components/NavBar';
import AllStudents from './components/AllStudents';
import CodeForInterview from './components/CodeforInterview';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element ={<CodeForInterview />} />
    <Route path='/all' element ={<AllStudents />} />
    <Route path='/add' element ={<AddStudent />} />
    <Route path='/edit/:id' element ={<EditStudent />} />
    </Routes>
    
    
      
      
    
      
    </BrowserRouter>
      
    </div>
  );
}

export default App;
