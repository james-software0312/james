import  { authHeader, handleResponse } from '../utils';
import { API_URL } from '../config/constants';
import axios from 'axios';

const login =  async (formData) => {

    axios.post(`${API_URL}/login`,  formData).then(res => {
        const token = res.data.token;
        if(token) {
            localStorage.setItem('userToken', token);
            window.location.href = '/dashboard';
        }
    }).catch(err => {
        console.log(err);
    })
}

const logout = () => {
    localStorage.removeItem('userToken');
}

const registerUser = async (user) => {
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    };

    const response = await fetch(`${API_URL}/signup`, requestOptions);
    return await handleResponse(response, logout);
}

export const userService = {
    login,
    logout,
    registerUser
}