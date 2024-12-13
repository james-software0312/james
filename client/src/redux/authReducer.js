import { createSlice } from "@reduxjs/toolkit";
import { userService } from '../services/users.service'
import { openSnackBar } from "./snackBarReducer";

let userToken = localStorage.getItem('userToken')? (localStorage.getItem('userToken')) : null;


export const authSlice = createSlice({
    name: "authentication",
    initialState:{
        loggingIn: localStorage.getItem('loggingIn')?localStorage.getItem('loggingIn'):false,
        loggedIn: userToken? true: false,
        userToken,
        registering: false
    },
    reducers:{
        loginRequest: state => {
            state.loggingIn = true
        },
        loginSuccess: (state, action) => {
            state.loggingIn = false;
            state.loggedIn = true;
            state.userToken = action.payload;
        },
        loginFailure : state => {
            state.loggingIn = false;
            state.loggedIn = false
        },
        registerRequest: state => {
            state.registering = true;
        },
        registerEnd : state => {
            state.registering =  false;
        },
        logout: state => {
            localStorage.removeItem('userToken');
            state.loggedIn = false;
            state.userToken = null;
        }
    }
});

const {  loginRequest, loginSuccess, loginFailure, registerRequest, registering, registerEnd} = authSlice.actions;

export const registerUser = (user) => async (dispatch) => {
    dispatch(registerRequest());

    try {
        const response = await userService.registerUser(user);
        console.log('response >>>>>', response);
        if(response.success) {
            dispatch(openSnackBar({message: `We've set an email to ${user.email}. Please check your email to verify and continue`, status: 'success'}));
            dispatch(registerEnd());
            return true;    
        } else {
            dispatch(openSnackBar({message: `User already exists ${user.email}.`, status: 'error'}));
            return false;

        }
    } catch (error) {
        dispatch(registerEnd());
        dispatch(openSnackBar({message: error.messsage, status: 'error'}));
        throw new Error(error);
    }
}

export const loginUser = (user) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const logininfo = await userService.login(user);
        console.log('logininfo >>>>',logininfo);
        if(logininfo.success) {
            dispatch(loginSuccess(logininfo.token));
            dispatch(openSnackBar({message: 'Success', status: 'success'}))
            return true;
        } else {
            dispatch(openSnackBar({message: 'Your email or Password are wrong', status: 'error'}));
            return false;
        }
    } catch (error) {
        dispatch(loginFailure());
        dispatch(openSnackBar({message: error.message, status: 'error'}));
        // throw new Error(error);
    }
}

export const logoutUser = (user) => async(dispatch) => {
    try {
        await userService.logout();
        dispatch(loginFailure());
    } catch(errors) {
        alert(errors);
    }
}

export default authSlice.reducer;