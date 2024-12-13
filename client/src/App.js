import './App.css';
import { Route, Routes} from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Landing from './pages/landing';
import SignUp from './pages/auth/singUp';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';
import Article from './pages/article';
import PrivateAuth from './Component/privateAuth';
import PrivateLogin from './Component/privateLogin';


// Function to set the token in the header
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

function App() {

  const loggedIn = useSelector(store => store.authState);
  const token = localStorage.getItem('userToken'); // Retrieve token from local storage
  setAuthToken(token); // Set the token in the header

  return (

      <Routes>
        <Route path='/' element={
          <PrivateLogin isAuthenticated={!loggedIn.loggedIn}>
              <Landing/>
          </PrivateLogin>
         }/>
          <Route path='/dashboard' element = { 
            <PrivateAuth isAuthenticated={loggedIn.loggedIn}>
              <Landing />
            </PrivateAuth>
           }/>
          <Route path='/article' element = { 
            <PrivateAuth isAuthenticated={loggedIn.loggedIn}>
              <Article />
            </PrivateAuth>
           }/>
          <Route path='/signUp' element = {
            <PrivateLogin isAuthenticated={!loggedIn.loggedIn}>
              <SignUp/>
            </PrivateLogin>
          }/>
          <Route path='/login' element = {
            <PrivateLogin isAuthenticated={!loggedIn.loggedIn}>
              <Login/>
            </PrivateLogin>
          }/>
      </Routes>
  );
}

export default App;
