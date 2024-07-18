import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';

import styles from './Cart.module.css'

export default function Cart() {

    const cart = useSelector(state => state.Cart)
    const products = useSelector(state => state.Products)
    const [total, setTotal] = useState(
        cart.reduce((acc, element) => {
            const product = products.find((el) => { return el.id === element.productId })
            return acc + element.quantity * product.price
        }, 0))

    const dispatch = useDispatch()
    useEffect(() => {
        setTotal(cart.reduce((acc, element) => {
            const product = products.find((el) => { return el.id === element.productId })
            return acc + element.quantity * product.price
        }, 0))
    }, [cart, products])


    const del = (e) => {
        dispatch({
            type: 'DELETE_FROM_CART', payload: {
                id: e.currentTarget.id
            }
        })
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
                        <div className={styles.h6} cl style={{ alignSelf: 'center' }}>{product.price} $</div>
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

            <div className={`d-flex flex-column align-items-end my-5 ${styles.stat}`} style={{ width: '90%' }}>
                <h1>Total: {total.toFixed(2)}</h1>
                <Button className='me-5 mt-3' style={{backgroundColor:'var(--mainColorHover)',boxShadow:'0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 12px 0 rgba(0, 0, 0, 0.1)'}} variant="contained" endIcon={<SendIcon />}>Continue</Button>
            </div>
        </>
    )
}
