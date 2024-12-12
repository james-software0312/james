import axios from "axios";
import React, { useEffect } from "react";
import { API_URL } from "../config/constants";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/authReducer";

export default function Dashboard() {
    const dispatch = useDispatch();
    function handleLogOut() {
        dispatch(logoutUser());
        window.location.href ='/login';
    }
    useEffect(() => {
        axios.get(`${API_URL}/dashboard`).then(res => {
            console.log('send >>>>>>>>>>>>>');
        }).catch(err => {
            console.error(err);
        })
    })
    return(
        <div>
            Dashboard
            <button className="text-[#636F8C] font-medium text-[17px] rounded-[12px] p-[10px] bg-[#333]" onClick={handleLogOut}>logOut</button>
        </div>
    )
}