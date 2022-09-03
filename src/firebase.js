
import { initializeApp } from "firebase/app";
import toast from 'react-hot-toast';
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_DV4L-GXN7K4HV5ELVVd9ufN5xJ0VLLw",
    authDomain: "fir-auth-439b5.firebaseapp.com",
    projectId: "fir-auth-439b5",
    storageBucket: "fir-auth-439b5.appspot.com",
    messagingSenderId: "587629365279",
    appId: "1:587629365279:web:717e9f697f7a159871ed2a"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth();


export const register = async (email, password) => { 
    try{
        const {user} =await  createUserWithEmailAndPassword(auth, email, password)
    return user;

    }
    catch(error){
        toast.error(error.message);
    }
}

export const login = async (email, password) => {
    try{
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        return user;
    }
    catch(error){
        toast.error(error.message);
    }
}

export const logout = async () => {
    try{
        await signOut(auth);
        return true
    }
    catch(error){
        toast.error(error.message);
    }
}


export default app; 