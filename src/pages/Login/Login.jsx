import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {useNavigate} from 'react-router-dom';
import "./Login.css"



const Login = () => {

    const[username, setUsername] =useState("");
    const[password, setPassword] =useState("");
    const[errorMsg , setErrorMsg] = useState("");
    let navigate = useNavigate();

const handleOnSubmit = (e)=>{
    e.preventDefault();
    //cheking the username and password
    if(username ==="sandeepa" && password === "sand169"){
        navigate("/Dashboard")
        console.log("Login successful")
    }else{
        if(username !== "sandeepa" && password !== "sand169"){
            setErrorMsg("Provide the valid usrname and password")
        }else if(username !== "sandeepa"){
            setErrorMsg("Username is invalid")
        }else{
            setErrorMsg("Password is invalid")
        }
    }
}

  return (
    <>
    
       <div className='container'>
        <div className= 'overlay'>
        <form className='form-box' onSubmit={handleOnSubmit}>
            <div className="header">
                <h1>Login</h1>
            </div>
            <div className='inputs'>
            <div className='inputs-user'>
                <input type='text' className='userName' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                <FaUserAlt  className='icon'/>
            </div>
            <div className='inputs-pwd'>
                <input type ='text' className='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <RiLockPasswordFill className='icon' />
            </div>
            </div>
            <div className="button">
                <button type='submit' className='loginBtn' >Login </button>
            </div>
            {errorMsg && <div className="error-Msg">{errorMsg}</div>}
        </form>
        </div>
        </div>

    </>
  )
}

export default Login