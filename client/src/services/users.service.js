import  { authHeader, handleResponse } from '../utils';
import { API_URL } from '../config/constants';
import axios from 'axios';

const login =  async (formData) => {
   try {
        let token = '';
        const res = await axios.post(`${API_URL}/login`,  formData);
        console.log('res.status >>>>>> ', res.status);
        if(res.data.success) {
            token = res.data.token;
            localStorage.setItem('userToken', token);
            return {success: true, token: token};
        } else {
            return {success: false, token: ''};
        }
   } catch(err) {
        console.log(err);
        // alert(err);
   }
}

const logout = () => {
    localStorage.removeItem('userToken');
}

const registerUser = async (user) => {
    const res = await axios.post(`${API_URL}/signup`, user);
    return res.data;
}

export const userService = {
    login,
    logout,
    registerUser
}