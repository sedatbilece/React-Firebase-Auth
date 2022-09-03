import { Link } from "react-router-dom"


export default function Home() {
    return (<div className="flex justify-center ">
     <Link to="/register" className="m-3 underline hover:text-red-400">Register now</Link>
     <Link to="/login" className="m-3 underline hover:text-red-400">Login  </Link>
    </div>)
}