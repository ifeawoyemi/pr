import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import Modal from './pages/Modal/Modal';
import SignUp from './pages/SignUp/SignUp';
import Verify from './pages/Verify'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/modal' element={<Modal/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/purse' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
