import { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { MaxContainer } from 'commons/ui/styles';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import {useAuthDataContext} from "context/AuthContext";

const cookies = new Cookies();

const Login = () => {
  const theme = useContext(ThemeContext);
  const {onLogin} = useAuthDataContext();

  const onSubmit = data => {
    function loginUser() {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API}/users/login`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          username: 'test',
          password: 'test123',
        },
      })
        .then(response => {
            console.log(response)
          const {username,privileges,user,token} = response.data;
          cookies.set('VERITYTOKEN', token, { maxAge: 50000000, domain:  process.env.REACT_APP_COOKIE_DOMAIN});
          onLogin({username,privileges,user})

          return window.location.href = `/test`;
        })
        .catch(error => {
          alert('Wrong Password');
        });
    }
    loginUser();
  };


  return (
    <ThemeProvider theme={theme}>
      <MaxContainer>
         form
         <div onClick={onSubmit}>
           test login
         </div>
      </MaxContainer>
    </ThemeProvider>
  );
};

export default Login;
