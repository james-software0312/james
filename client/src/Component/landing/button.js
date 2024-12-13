import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authReducer";
// import { logoutUser } from "../redux/authReducer";
export default function Button(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleClick() {
        if(props.label === 'Log in') {
            navigate('/login')
        } else if(props.label === 'Sign up') {
            navigate('/signup')
        } else if(props.label ==='Log out') {
            
            dispatch(logoutUser());
            navigate('/login');
            // window.location.href =
        }
    }
    return(
        <button className="text-[#636F8C] font-medium text-[17px] rounded-[12px] p-[10px] transition-background duration-300 hover:bg-[#0069FF] focus:bg-[#E3E8F4] hover:text-[white] "
            onClick={handleClick}>
            {props.label}
        </button>
    )
}