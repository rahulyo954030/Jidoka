import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Pvtroute from './components/Pvtroute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={
          <Pvtroute>
        <Dashboard/>
        </Pvtroute>
        }/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
