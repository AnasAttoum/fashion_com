import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from './Cart.module.css'

export default function Cart() {

    const cart = useSelector(state => state.Cart)
    const products = useSelector(state => state.Products)
    const saveOrderDetails = useSelector(state => state.SaveOrderDetails)
    const [total, setTotal] = useState(
        cart.reduce((acc, element) => {
            const product = products.find((el) => { return el.id === element.productId })
            return acc + element.quantity * (product.price - product.price*(element.color.sale/100)).toFixed(2)
        }, 0))
    const [num, setNum] = useState(
        cart.reduce((acc, element) => {
            return acc + element.quantity
        }, 0))

    const dispatch = useDispatch()
    const phone = React.useRef()
    const address = React.useRef()
    const check = React.useRef()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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



    useEffect(() => {
        setTotal(cart.reduce((acc, element) => {
            const product = products.find((el) => { return el.id === element.productId })
            return acc + element.quantity * (product.price - product.price*(element.color.sale/100)).toFixed(2)
        }, 0))
        setNum(cart.reduce((acc, element) => {
            return acc + element.quantity
        }, 0))
    }, [cart, products])

    const del = (e) => {
        dispatch({
            type: 'DELETE_FROM_CART', payload: {
                id: e.currentTarget.id
            }
        })
    }

    const moreInfo = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_ORDER', payload: {
            cart:cart,
            phone:phone.current.value,
            address:address.current.value
        }})

        if(check.current.checked){
            dispatch({ type: 'SAVE_ORDER_DETAILS', payload: {
                phone:phone.current.value,
                address:address.current.value
            }})
        }

        dispatch({type:'CLEAR_CART'})

        handleClose()
    }



    return (
        <>
            <div className={`d-flex my-2 py-4 ${styles.head}`}>
                <div>Product Details</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Action</div>
            </div>

            {cart.length === 0
                ? <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className={styles.noImg} src="/Images/NoFavoritesYet.jpg" alt="No Favorites Yet" style={{ width: '30vw', height: '30vw' }} />
                    <h1 className={styles.title}>No Products Here</h1>
                </div>
                : cart.map((element, index) => {
                    const product = products.find((el) => { return el.id === element.productId })
                    return <div className={styles.container} key={index}>
                        <div className='d-flex justify-content-center'>
                            <img style={{ alignSelf: 'center' }} className={styles.img} src={element.color.mainPic} alt={product.name} />
                            <div style={{ width: '70%', textAlign: 'left', alignSelf: 'center' }} className='d-flex flex-column align-items-start ms-2'>
                                <h6 style={{ color: 'black', fontSize: '1.2vw' }} className={styles.h6}>{product.name}</h6>
                                <p style={{ color: '#444', fontSize: '1vw' }} className={styles.p}>color: {element.color.color}</p>
                                <p style={{ color: '#444', fontSize: '1vw' }} className={styles.p}>size: {element.size}</p>
                            </div>
                        </div>
                        <div className={styles.h6} cl style={{ alignSelf: 'center' }}>{(product.price - product.price*(element.color.sale/100)).toFixed(2)} $</div>
                        <div className={styles.h6} style={{ alignSelf: 'center' }}>{element.quantity}</div>
                        <div className='d-flex justify-content-center align-items-center' style={{ alignSelf: 'center' }}>
                            <Link to={`/${product.type}/${product.id}`}>
                                <div className={styles.details}>Details</div>
                            </Link>
                            <IconButton onClick={del} id={element.id} aria-label="delete">
                                <DeleteIcon color='error' />
                            </IconButton>
                        </div>
                    </div>
                })
            }
            {cart.length !== 0 &&
                <div className={`d-flex flex-column align-items-end my-5 ${styles.stat}`} style={{ width: '90%' }}>
                    <h3>Total ({num} item) : {total.toFixed(2)} $</h3>
                    <Button onClick={handleOpen} className='me-5 mt-3' style={{ backgroundColor: 'var(--mainColorHover)', boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 12px 0 rgba(0, 0, 0, 0.1)' }} variant="contained" endIcon={<SendIcon />}>Continue</Button>
                </div>}



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
                            To continue your order, Please enter your information :
                        </Typography>
                        <form onSubmit={moreInfo}>
                            <ThemeProvider theme={theme} >
                                <TextField defaultValue={saveOrderDetails.phone} inputRef={phone} id="phone" label="Phone Number" variant="outlined" color='primary' className='mt-3' fullWidth required />
                                <TextField defaultValue={saveOrderDetails.fullAddress} inputRef={address} id="fullAddress" type='text' label="Full Address" variant="outlined" color='primary' className='mt-3' fullWidth required />
                                <div className='d-flex align-items-center mt-4'>
                                    <Checkbox {...label} inputRef={check} defaultChecked color="secondary" />
                                    <p className='mt-3'>Save your data to use it in the next order</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button type='submit' variant="contained" className={`mt-3 px-5 ${styles.order}`}>Order</Button>
                                </div>
                            </ThemeProvider>
                        </form>
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