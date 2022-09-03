import { useState } from 'react';
import {login} from '../firebase';
import {useNavigate} from 'react-router-dom';
export default function Login() {

    const navigate = useNavigate(); 
   
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async  (e) => {
    e.preventDefault();
   const user = await  login(email, password);

   if(user){
    
    navigate('/',{
        replace:true
    });
   }
}

    return (<div className=" flex justify-center">
          <form onSubmit={handleSubmit} className="w-96 mt-4">
              <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} name="email"
               className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" ></input><br></br>

              <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} name="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"></input><br></br>

              <button  type="submit"  disabled={!email || !password }
              className=" bg-blue-400 p-2 rounded hover:bg-blue-500 active:scale-90 text-white disabled:opacity-50 disabled:scale-100">Login</button>
           </form>
    </div >)
}