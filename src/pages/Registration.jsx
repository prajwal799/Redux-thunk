import { useState } from "react";
import {useDispatch} from "react-redux";
import { auth, formRegistration } from "./api";

const Registration = () => {
    
    const dispatch = useDispatch();
    const [form , setForm] = useState({
        name: "",
        email:"",
        password:"",
        username:"",
        mobile:"",
        description:""
    })
    const handleChange = (e) => {
        let {name ,value} = e.target;
        setForm({
            ...form,
            [name]:value
        });
       
    };
    const checkRegistration = (data) => {
        let count = 0;
        for(var i =0;i<data.length;i++){
            if(form.email == data[i].email || form.username == data[i].username){
                count++;
                alert('Email and username is already taken')
                break;
            }
        }
        if(count == 0){
            dispatch(formRegistration(form))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(auth(form.email,form.username)).then((res) => {
           checkRegistration(res)
        })
        
    }
    return(
        <div>
            Name : <input placeholder="name" value={form.name} onChange={handleChange} name="name"/><br /><br />
            Email : <input placeholder="email" value={form.email} onChange={handleChange} name="email"/><br /><br />
            password : <input placeholder="password" value={form.password} onChange={handleChange} name="password"/><br /><br />
            Username : <input placeholder="username" value={form.username} onChange={handleChange} name="username"/><br /><br />
            mobile : <input placeholder="Phone no" value={form.mobile} onChange={handleChange} name="mobile"/><br /><br />
            description : <input placeholder="discription" value={form.description} onChange={handleChange} name="description"/><br /><br />
         <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Registration;