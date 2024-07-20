import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import TextField from '@mui/material/TextField';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


import styles from './JoinUs.module.css'
import Footer from '../Sections/Footer'

export default function SignUp() {

  // eslint-disable-next-line
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [joinUs, setJoinUs] = useState('Sign In')
  const [verification, setVerification] = useState({ 'signUp': { 'name': '', 'email': '', 'password': '' }, 'signIn': { 'email': '', 'password': '' } })
  const nameSignUp = React.useRef()
  const emailSignUp = React.useRef()
  const passwordSignUp = React.useRef()
  const checkSignUp = React.useRef()
  const emailSignIn = React.useRef()
  const passwordSignIn = React.useRef()

  const dispatch = useDispatch()
  const users = useSelector(state => state.Users)
  const IsLogged = useSelector(state => state.IsLogged.log)

  const navigate = useNavigate();

  React.useEffect(() => {
    if (IsLogged) {
      navigate("/");
    }
  }, [IsLogged,navigate])

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#8f57c0',
      },
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: "red",
            marginTop: '5px'
          }
        }
      }
    }
  });

  const newId = Object.keys(users).length
  const signIn = (e) => {
    e.preventDefault()
    if (verification.signIn.email === '') {
      if (users.filter(element => { return element.email.toLowerCase() === emailSignIn.current.value.trim().toLowerCase() && element.password === passwordSignIn.current.value }).length !== 0) {
        setVerification({ ...verification, 'signIn': { ...verification.signIn, 'password': '' } })
        const user = users.find(element => { return element.email.toLowerCase() === emailSignIn.current.value.trim().toLowerCase() && element.password === passwordSignIn.current.value })
        dispatch({
          type: 'SIGN_IN', payload: {
            id: user.id,
            name: user.name,
            email: emailSignIn.current.value,
            password: passwordSignIn.current.value,
          }
        })
        navigate("/");
      }
      else {
        setVerification({ ...verification, 'signIn': { ...verification.signIn, 'password': 'Invalid Email or Password' } })
      }
    }
  }

  const signUp = (e) => {
    e.preventDefault()
    if (verification.signUp.name === '' && verification.signUp.email === '' && verification.signUp.password === '' && checkSignUp.current.checked) {
      if (users.filter(element => { return element.email.toLowerCase() === emailSignUp.current.value.trim().toLowerCase() }).length === 0) {
        setVerification({ ...verification, 'signUp': { ...verification.signUp, 'email': '' } })
        dispatch({
          type: 'ADD_USER', payload: {
            id: newId,
            name: nameSignUp.current.value,
            email: emailSignUp.current.value.trim(),
            password: passwordSignUp.current.value,
          }
        })
        dispatch({
          type: 'SIGN_IN', payload: {
            id: newId,
            name: nameSignUp.current.value,
            email: emailSignUp.current.value.trim(),
            password: passwordSignUp.current.value,
          }
        })
        navigate("/");
      }
      else {
        setVerification({ ...verification, 'signUp': { ...verification.signUp, 'email': 'This email already exist' } })
      }
    }
  }


  const changeSign = () => {
    if (joinUs === 'Sign In') {
      document.getElementById('pic').style.transform = 'translateX(24vw)'
      setJoinUs('Sign Up')
    }
    else {
      document.getElementById('pic').style.transform = 'translateX(-24vw)'
      setJoinUs('Sign In')
    }
  }

  return (
    <>
      <div className='d-flex justify-content-center mb-5' style={{ position: 'relative' }}>
        <div className={`${styles.signIn}`}>
          <h1 className={styles.h1} style={{ textAlign: 'center' }}>Sign In</h1>
          <form onSubmit={signIn} className='d-flex flex-column justify-content-center align-items-start' style={{ height: '80%' }}>

            <ThemeProvider theme={theme} >

              <label htmlFor='email' className='my-3'>Email Address :</label>
              <TextField id="email" label="email@gmail.com" variant="outlined" color='primary' fullWidth inputRef={emailSignIn} helperText={verification.signIn.email} required
                onChange={(e) => {
                  if (!regEmail.test(e.target.value)) {
                    setVerification({ ...verification, 'signIn': { ...verification.signIn, 'email': 'Please enter a valid email' } })
                  }
                  else {
                    setVerification({ ...verification, 'signIn': { ...verification.signIn, 'email': '' } })
                  }
                }} />

              <label htmlFor='password' className='my-3'>Password :</label>
              <TextField id="password" label="" type={false ? "text" : "password"} variant="outlined" color='primary' fullWidth inputRef={passwordSignIn} helperText={verification.signIn.password} required />

              <Button type='submit' variant="contained" endIcon={<SendIcon />} className={`mt-5 px-5 ${styles.Button}`}>Log In</Button>
            </ThemeProvider>

          </form>
        </div>

        <div className={`${styles.signUp}`}>
          <h1 className={styles.h1} style={{ textAlign: 'center' }}>Sign Up</h1>
          <h6 className={styles.h6} style={{ textAlign: 'center' }}>Sign up for free to access ro in any of our products</h6>
          <form onSubmit={signUp} className='d-flex flex-column justify-content-center align-items-start' style={{ height: '80%' }}>

            <ThemeProvider theme={theme} >
              <label htmlFor='name' className='my-3 mt-5'>Name :</label>
              <TextField id="name" label="Name" variant="outlined" color='primary' fullWidth inputRef={nameSignUp} required helperText={verification.signUp.name}
                onChange={(e) => {
                  if (e.target.value.length <= 1) {
                    setVerification({ ...verification, 'signUp': { ...verification.signUp, 'name': 'Please enter a valid name' } })
                  }
                  else {
                    setVerification({ ...verification, 'signUp': { ...verification.signUp, 'name': '' } })
                  }
                }} />

              < label htmlFor='email' className='my-3' > Email Address:</label>
              <TextField id="email" label="email@gmail.com" variant="outlined" color='primary' fullWidth inputRef={emailSignUp} helperText={verification.signUp.email} required
                onChange={(e) => {
                  if (!regEmail.test(e.target.value)) {
                    setVerification({ ...verification, 'signUp': { ...verification.signUp, 'email': 'Please enter a valid email' } })
                  }
                  else {
                    setVerification({ ...verification, 'signUp': { ...verification.signUp, 'email': '' } })
                  }
                }} />

              <label htmlFor='password' className='my-3'>Password :</label>
              <TextField id="password" label="" type={false ? "text" : "password"} variant="outlined" color='primary' fullWidth inputRef={passwordSignUp} helperText={verification.signUp.password} required
                onChange={(e) => {
                  if (e.target.value.length < 8) {
                    setVerification({ ...verification, 'signUp': { ...verification.signUp, 'password': 'Your password must be more than 7 character' } })
                  }
                  else {
                    setVerification({ ...verification, 'signUp': { ...verification.signUp, 'password': '' } })
                  }
                }} />

              <div className='d-flex align-items-center mt-5'>
                <Checkbox {...label} defaultChecked color="primary" inputRef={checkSignUp} />
                <p className='mt-3'>Agree to our Terms of use and Privacy Policy</p>
              </div>

              <Button type='submit' variant="contained" endIcon={<SendIcon className={styles.sendIcon}/>} className={`mt-1 px-5 ${styles.Button}`} >Sign Up</Button>
            </ThemeProvider>

          </form>
        </div>

        <div id='pic' className={`d-flex justify-content-center align-items-center ${styles.pic}`}>
          <div className={styles.btn} onClick={changeSign}>{joinUs}</div>
        </div>

      </div >
      <Footer />
    </>
  )
}
