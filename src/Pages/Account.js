import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';

import styles from './Account.module.css'
import Title from "../Components/Title";

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function Account() {
  // eslint-disable-next-line
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const account = useSelector(state => state.IsLogged.account)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = React.useState({ btn: '', jsx: '' });


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const name = React.useRef()
  const email = React.useRef()
  const password = React.useRef()
  const newPassword = React.useRef()
  const war = React.useRef()

  const edit = (e) => {
    if (e.currentTarget.id === 'Name') {
      setData({
        btn: e.currentTarget.id, jsx:
          <form onSubmit={editName}>
            <TextField id="name" label="New Name" variant="outlined" color='primary' className='mt-3' inputRef={name} fullWidth required />
            <TextField id="password" type='password' label="Password" variant="outlined" color='primary' className='mt-3' inputRef={password} fullWidth required />
            <span ref={war} style={{ color: 'red' }}></span>
            <div className='d-flex justify-content-center'>
              <Button type='submit' variant="contained" className='mt-3 px-5' >Edit</Button>
            </div>
          </form>
      })
    }
    else if (e.currentTarget.id === 'Email') {
      setData({
        btn: e.currentTarget.id, jsx:
          <form onSubmit={editEmail}>
            <TextField id="email" label="New Email" variant="outlined" color='primary' className='mt-3' inputRef={email} fullWidth required />
            <TextField id="password" type='password' label="Password" variant="outlined" color='primary' className='mt-3' inputRef={password} fullWidth required />
            <span ref={war} style={{ color: 'red' }}></span>
            <div className='d-flex justify-content-center'>
              <Button type='submit' variant="contained" className='mt-3 px-5' >Edit</Button>
            </div>
          </form>
      })
    }
    else{
      setData({
        btn: e.currentTarget.id, jsx:
          <form onSubmit={editPassword}>
            <TextField id="password" type='password' label="Old Password" variant="outlined" color='primary' className='mt-3' inputRef={password} fullWidth required />
            <TextField id="newPassword" type='password' label="New Password" variant="outlined" color='primary' className='mt-3' inputRef={newPassword} fullWidth required />
            <span ref={war} style={{ color: 'red' }}></span>
            <div className='d-flex justify-content-center'>
              <Button type='submit' variant="contained" className='mt-3 px-5' >Edit</Button>
            </div>
          </form>
      })
    }

    handleOpen()
  }

  const editName = (e) => {
    e.preventDefault()
    if (name.current.value.length <= 1) {
      war.current.innerHTML = 'Please enter a valid name'
    }
    else if (password.current.value !== account.password) {
      war.current.innerHTML = 'Password is not correct'
    }
    else {
      war.current.innerHTML = ''
      dispatch({
        type: 'EDIT_USER_NAME', payload: {
          id: account.id,
          newName: name.current.value
        }
      })
      dispatch({
        type: 'EDIT_CURRENT_NAME', payload: {
          newName: name.current.value
        }
      })
      handleClose(true)
    }
  }

  const editEmail = (e) => {
    e.preventDefault()
    if (!regEmail.test(email.current.value)) {
      war.current.innerHTML = 'Please enter a valid email'
    }
    else if (password.current.value !== account.password) {
      war.current.innerHTML = 'Password is not correct'
    }
    else {
      war.current.innerHTML = ''
      dispatch({
        type: 'EDIT_USER_EMAIL', payload: {
          id: account.id,
          newEmail: email.current.value
        }
      })
      dispatch({
        type: 'EDIT_CURRENT_EMAIL', payload: {
          newEmail: email.current.value
        }
      })
      handleClose(true)
    }
  }

  const editPassword = (e) => {
    e.preventDefault()
    if (password.current.value !== account.password) {
      war.current.innerHTML = 'Old password is not correct'
    }
    else if (newPassword.current.value.length <=8) {
      war.current.innerHTML = 'Password must be more than 7 character'
    }
    else {
      war.current.innerHTML = ''
      dispatch({
        type: 'EDIT_USER_PASSWORD', payload: {
          id: account.id,
          newPassword: newPassword.current.value
        }
      })
      dispatch({
        type: 'EDIT_CURRENT_PASSWORD', payload: {
          newPassword: newPassword.current.value
        }
      })
      handleClose(true)
    }
  }

  const signOut = () => {
    dispatch({ type: 'SIGN_OUT' })
    navigate('/joinus')
  }

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center mt-5'>

        <div className={styles.container}>
          <br /><Title title='My Info' />

          <div id='Name' className='d-flex justify-content-between' style={{ cursor: 'pointer' }} onClick={edit}>
            <h4 className={styles.text}>Name</h4>
            <EditIcon />
          </div>
          <div className={`ms-3 ${styles.subText}`}>{account.name}</div>

          <div id='Email' className='d-flex justify-content-between align-items-end' style={{ cursor: 'pointer' }} onClick={edit}>
            <h4 className={`mt-5 ${styles.text}`}>E-mail</h4>
            <EditIcon />
          </div>
          <div className={`ms-3 ${styles.subText}`}>{account.email}</div>

          <div id='Password' className='d-flex justify-content-between align-items-end' style={{ cursor: 'pointer' }} onClick={edit}>
            <h4 className={`mt-5 ${styles.text}`}>Password</h4>
            <EditIcon />
          </div>
          <div className='ms-3'>
            {account.password.split('').map((el, index) => {
              return <span key={index}>•</span>
            })}
          </div>
        </div>

        <Button className='mt-4' color='error' variant="contained" endIcon={<LogoutIcon />} onClick={signOut}>
          Sign Out
        </Button>
      </div>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit {data.btn}
            </Typography>
            {data.jsx}
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};