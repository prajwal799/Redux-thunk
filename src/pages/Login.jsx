import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./api";
import {Navigate} from "react-router"
import { loginSuccess } from "../redux/action";
import { NavLink } from 'react-router-dom';
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword]  =useState("");
    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth)
    const checkLogin = (data) => {
        let count = 0;
        for(var i =0;i<data.length;i++){
            if(email == data[i].email && password == data[i].password){
                count++;
                dispatch(loginSuccess());
            }
        }
       
        if(count == 0){
            alert("Invalid login creadentials")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(auth(email,password)).then((res) => {
            checkLogin(res)
        })
       
    }
    return login ?  <Navigate to="/github"></Navigate>  : (
        <div>
            Email : <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value) } /><br /><br />
            Password : <input placeholder="password" value={password} type="password" onChange={(e) => setPassword(e.target.value) } /><br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )  
}
export default Login;