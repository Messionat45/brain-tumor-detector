import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main/>} />
      </Routes >
   </Router>
    </>
     
  );
}

export default App;
