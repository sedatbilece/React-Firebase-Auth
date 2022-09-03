import './App.css';
import {Toaster } from 'react-hot-toast';

import {Routes, Route,useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {  
  const location = useLocation().pathname.replace('/','');
  console.log(location);
  return (
    <div >
      <h1 className="text-3xl font-bold underline bg-pink-300 flex justify-center p-2 opacity-75">
      React Firebase Authentication App {location.length>0?`[${location} page]`:""}
    </h1>
      <hr></hr>
          <Toaster position='top-right' />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>

           

    </div>
  );
}

export default App;
