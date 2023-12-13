import { Routes ,Route } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import LoginPage from './pages/LoginPage/LoginPage';
import Modal from './pages/Modal/Modal';
import Verify from './pages/Verify';
import Home from './pages/Home/Home';
import MyPurse from './pages/Purse/Purse';
import Investment from './pages/Investment/Investment';
import Transaction from '../src/pages/Transaction/Transaction';
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/modal' element={<Modal/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/purse' element={<MyPurse/>}/>
        <Route path='/investment' element={<Investment/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
