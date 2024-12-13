import React,{useState, createContext, useContext, useEffect} from "react";
import Layout from "../../Component/layout";
import CustomizeInput from "../../Component/customizeInput";
import CustomizeRadio from "../../Component/customizeRadio";

import { useDispatch } from "react-redux";
import { openSnackBar } from "../../redux/snackBarReducer";
import { registerUser } from "../../redux/authReducer";
import { Link , useNavigate} from "react-router-dom";

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({firstName: '', lastName: '', password: '', email: ''});
    // const [email, setEmail]
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

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(email);
      }
      
    async function handleClick() {
        console.log(validateEmail(formData.email));
        if(!validateEmail(formData.email)) {
            dispatch(openSnackBar({status: 'warning', message: 'Email is not valid.'}))
            return;
        }
        if(formData.email === '' || formData.email.length < 3){
            dispatch(openSnackBar({status: 'warning', message: 'Email letter is more than 3 letters.'}));
            return;
        }
        if(formData.firstName === '' || formData.firstName.length < 3){
            dispatch(openSnackBar({status: 'warning', message: 'Please fill firstName'}));
            return;
        }
        if(formData.lastName === '' || formData.lastName.length < 3){
            dispatch(openSnackBar({status: 'warning', message: 'Please fill lastName'}));
            return;
        }
        if(formData.password === '' || formData.password.length < 3){
            console.log('formData ,', formData.password);
            dispatch(openSnackBar({status: 'warning', message: 'Please fill password'}));
            return;
        }
        const signupStatus  = await dispatch(registerUser(formData));
        console.log(signupStatus,'sdsdfs');
        if(signupStatus) {
            navigate('/login');
        }
    }


    useEffect(()=>{
        if(password.length >=8) {
            setLong(true);
        } else if(password.length < 8) {
            setLong(false);
        }  
    },[password])

    useEffect(() => {
        if(findCapitalLetters(password).length) {
            console.log(findCapitalLetters(password));
            setCapital(true);
        } else {
            setCapital(false);
        }
    }, [password]);

    useEffect(() => {
        if(hasLowerCase(password)) {
            setSmall(true);
        } else {
            setSmall(false);
        }
        let formD = formData;
        formD['password'] = password;
        setFormData(formD);
    },[password]);

    useEffect(() => {
        if(password.match(/\d+/g)) {
            setNumber(true);
        } else {
            setNumber(false);
        }
    },[password])
    
    function setForm(key, value) {
        console.log(key, value);
        let formD = formData;
        formD[`${key}`] = value;
        setFormData(formD);
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
                        <Link to='/login' className="text-white" >Log in</Link>
                    </div>
                </div>
            </Layout>
    )
}