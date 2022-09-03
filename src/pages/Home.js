import { Link } from "react-router-dom"
import { useSelector ,useDispatch} from "react-redux"
import { logout  as logoutHandle} from "../store/auth";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
export default function Home() {

    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout =  async() => {
      await logout()
      dispatch(logoutHandle())
        navigate('/login',{
            replace:true
        });
    }

     if(user){
        return(<div>
            <h1> Welcome {user.email}</h1>
            <button  className="ml-2 bg-red-400 active:scale-95 bg-red-600 p-1 rounded-md text-white cursor-pointer"
            onClick={handleLogout}>Logout</button>
        </div>)
     }

    return (<div className="flex justify-center ">
     <Link to="/register" className="m-3 underline hover:text-red-400">Register now</Link>
     <Link to="/login" className="m-3 underline hover:text-red-400">Login  </Link>
    </div>)
}