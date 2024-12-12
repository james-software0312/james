import React,{useState, createContext, useContext, useEffect} from "react";
import Layout from "../../Component/layout";
import CustomizeInput from "../../Component/customizeInput";
import CustomizeRadio from "../../Component/customizeRadio";

import { useDispatch } from "react-redux";
import { openSnackBar } from "../../redux/snackBarReducer";
import { registerUser } from "../../redux/authReducer";

export default function SignUp() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({firstName: '', lastName: '', password: '', email: ''});
    const [password, setPassword] = useState('');
    const [long, setLong] = useState(false);
    const [small, setSmall] = useState(false);
    const [capital, setCapital] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [number, setNumber] = useState(false);
    const UserContext = createContext();
    
    function findCapitalLetters(str) {
        const capitalLetters = str.match(/[A-Z]/g);
        return capitalLetters ? capitalLetters : [];
    }

    function hasLowerCase(str) {
        return /[a-z]/.test(str);
    }
      
    function handleClick() {
        if(formData.email === '' || formData.email.length < 4){
            dispatch(openSnackBar({status: 'warning', message: 'Please fill email'}));
            return;
        }
        if(formData.firstName === '' || formData.firstName.length < 4){
            dispatch(openSnackBar({status: 'warning', message: 'Please fill firstName'}));
            return;
        }
        if(formData.lastName === '' || formData.lastName.length < 4){
            dispatch(openSnackBar({status: 'warning', message: 'Please fill lastName'}));
            return;
        }
        if(formData.password === '' || formData.password.length < 4){
            dispatch(openSnackBar({status: 'warning', message: 'Please fill password'}));
            return;
        }
        dispatch(registerUser(formData))
    }


    useEffect(()=>{
        if(password.length >=8) {
            setLong(true);
        } else if(password.length < 8) {
            setLong(false);
        }  
    },[password])

    function setForm(key, value) {
        
    }

    

    return(
            <Layout>
                <div className = "border-solid border-2 border-[#36D68F] rounded-[7px] flex flex-col w-[100%] md:w-[35%]  p-[20px] gap-[10px]">
                    <h2 className="text-white">Sign Up</h2>
                    <div className=" block xl:flex xl:justify-between  xl:gap-[8px] xl:flex-wrap ">
                        <CustomizeInput label = 'First Name' 
                            setForm = {e => setForm('firstName',e)} ></CustomizeInput>
                        <CustomizeInput label = "Last Name"  
                            setForm = {e => setForm('lastName',e)}></CustomizeInput>
                    </div>
                    <CustomizeInput label = "Email Address"
                         setForm = {e => setForm('email',e)}></CustomizeInput>
                    <CustomizeInput label = "Password" value = {password}
                         setForm = {setPassword}></CustomizeInput>
                    <CustomizeRadio label = 'At least 8 characters long'  value = {long}/> 
                    <CustomizeRadio label = 'At least 1 capital letter'  value = {capital}/>
                    <CustomizeRadio label = 'At least 1 small letter'  value = {small}/>
                    <CustomizeRadio label = 'At least 1 number or symbol'  value = {number}/>
                    <button className="rounded-[5px] p-2 text-white bg-gradient-to-r from-[#37E690] to-[#367F8F] mt-[20px]"
                        onClick = {handleClick}>Sign Up</button>
                    <div className="flex justify-center gap-[10px]">
                        <h5 className="text-white hidden xl:block">Already have an account?</h5>
                        <a href="/login" className="text-cyan-500">Login</a> 
                    </div>
                </div>
            </Layout>
    )
}