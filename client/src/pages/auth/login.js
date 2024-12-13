import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Layout from "../../Component/layout";
import CustomizeInput from "../../Component/customizeInput";
import CustomizeRadio from "../../Component/customizeRadio";
import { openSnackBar } from "../../redux/snackBarReducer";
import { loginUser } from "../../redux/authReducer";
import { Link, useNavigate  } from "react-router-dom";

export default function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggin = useSelector(state => state.authState);  
    console.log(loggin);
    const [formData, setFormData] = useState({ email: '', password: ''});
    function setForm(key, value) {
        let formD = formData;
        formD[`${key}`] = value;
        setFormData(formD);
        console.log(formData);
    }

    async function handleLogging() {
        if(formData.email === '') {
            dispatch(openSnackBar({status: 'warning', message: 'Please fill email'}));
            return;
        }
        if(formData.password === '') {
            dispatch(openSnackBar({status: 'warning', message: 'Please fill password'}));
            return ;
        }
        const loginStatus = await dispatch(loginUser(formData));
        if(loginStatus) {
            navigate('/dashboard');
        }

    }
    return(
        <Layout>
            <div className = "border-solid border-2 border-[#36D68F] rounded-[7px] flex flex-col w-[100%] md:w-[35%] p-[20px] gap-[25px]">
                <h2 className="text-white text-[32px]">Login</h2>
                <CustomizeInput label = "Email Address" 
                    setForm = {e => setForm('email', e)}/>
                <CustomizeInput label = "Password"
                    setForm = {e => setForm('password', e)}/>
                <CustomizeRadio value = {false} label = 'Remember Me'></CustomizeRadio>
                <button className="rounded-[5px] p-2 text-white bg-gradient-to-r from-[#37E690] to-[#367F8F] mt-[20px]"
                    onClick={handleLogging}>Login</button>
                <div className="flex justify-center gap-[10px]">
                    <h5 className="text-white">Dont't have an account?</h5>
                    {/* <a href="/signup" className="text-cyan-500">SignUp</a>  */}
                    <Link to='/signup' className="text-white" >Sign up</Link>
                </div>
            </div>
        </Layout>
    )
}