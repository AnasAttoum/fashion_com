import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './ProductDetails.module.css'
import HalfRating from './Rating'
import Comments from './Comments'
import NormalSnackbar from './NormalSnackbar'
import { useDispatch, useSelector } from 'react-redux'

import * as React from 'react';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
    return (
        <BaseNumberInput
            slots={{
                root: StyledInputRoot,
                input: StyledInput,
                incrementButton: StyledButton,
                decrementButton: StyledButton,
            }}
            slotProps={{
                incrementButton: {
                    children: <AddIcon fontSize="small" />,
                    className: 'increment',
                },
                decrementButton: {
                    children: <RemoveIcon fontSize="small" />,
                },
            }}
            {...props}
            ref={ref}
        />
    );
});

export default function ProductDetails(props) {

    const { product, color, setColor } = props
    const myKeys = Object.keys(product.colors)
    const sizes = ['XXS', 'XS', 'S', 'L', 'XL', 'XXL', '3XL', '4XL']


    const [snack, setSnack] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState('')
    const [warning, setWarning] = useState('')
    const IsLogged = useSelector(state => state.IsLogged.log)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setSnack(false)
        }, 5000)
    })


    const clickColor = (e) => {
        document.getElementById('colors').childNodes.forEach(element => {
            element.style.outline = 'none'
        })
        e.target.style.outline = '4px solid var(--mainColor)'
        setColor(product.colors[e.target.style.backgroundColor])
    }


    const click = (e) => {
        document.getElementById('container').childNodes.forEach(element => {
            element.style.backgroundColor = 'white'
        })
        e.target.style.backgroundColor = '#999'
        setSize(e.target.id)
    }

    const addToCart = () => {
        if (IsLogged) {
            if (size !== '') {
                setWarning('')
                dispatch({
                    type: 'ADD_TO_CART', payload: {
                        productId: product.id,
                        color:color,
                        size:size,
                        quantity:quantity
                    }
                })
                navigate('/cart')
            }
            else {
                setWarning('Please choose a size')
            }
        }
        else {
            setSnack(true)
        }
    }

    return (
        <div className={`m-5 ${styles.responsive}`} style={{ width: '40%' }}>
            {snack && <NormalSnackbar text={'Please Login or Sign Up first'} />}
            <h2>{product.name}</h2>
            <h6>{product.description}</h6>

            <HalfRating rating={product.rating} num={product.num} id={product.id} refresh={props.refresh} setRefresh={props.setRefresh} />

            <Comments refresh={props.refresh} setRefresh={props.setRefresh} comments={product.comments} product={product} />

            <div className={styles.colors}>
                <p>Colors :</p>
                <div id='colors' className='d-flex' style={{ columnGap: '20px' }}>
                    {myKeys.map((element, index) => {
                        return <div key={index} style={{ backgroundColor: element }} onClick={clickColor}></div>
                    })}
                </div>
            </div>

            <div className='mt-4'>Select Size :</div>
            <div id='container' style={{ borderTop: 'none' }}>
                {sizes.map((element, index) => {
                    return (color.size.includes(element) ? <div key={index} id={element} className={styles.size} onClick={click}>{element}</div> : <div key={index} className={styles.notFound}>{element}</div>)
                })}
                {warning !== '' && <p style={{ color: 'red' }}>{warning}</p>}
            </div>

            <NumberInput aria-label="Quantity Input" min={1} max={99} defaultValue={1}
                onChange={(e, val) => {
                    setQuantity(val)
                }} />

            <div className='d-flex mt-2'>
                <div className={styles.btn1} onClick={addToCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 32 32"><path fill="white" d="M29.02 11.754L8.416 9.474L7.16 4.715a.758.758 0 0 0-.727-.558H3.34a1.214 1.214 0 0 0-.963-.49a1.24 1.24 0 1 0 0 2.483c.4 0 .738-.2.965-.492h2.512l5.23 19.8a3.282 3.282 0 0 0-.89 2.242a3.29 3.29 0 0 0 3.292 3.293a3.296 3.296 0 0 0 3.297-3.293a3.19 3.19 0 0 0-.093-.743h5.533a3.25 3.25 0 0 0-.092.743c0 1.82 1.476 3.293 3.296 3.293S28.72 29.52 28.72 27.7a3.296 3.296 0 0 0-3.294-3.297c-.95 0-1.8.41-2.402 1.053h-7.136a3.276 3.276 0 0 0-2.402-1.053c-.38 0-.738.078-1.077.196l-.182-.686H26.81a2.5 2.5 0 0 0 2.39-1.96l1.575-7.798a2.17 2.17 0 0 0 .04-.414a1.995 1.995 0 0 0-1.795-1.988zm-3.592 16.24a.298.298 0 0 1-.297-.295c.003-.166.135-.298.298-.298s.295.132.297.297a.298.298 0 0 1-.297.294zm1.78-7.495l.948-.95l-.318 1.58zm-14.453-9.037L13.79 12.5l-1.29 1.29l-1.293-1.29l1.087-1.088zm4.498.498l.538.54l-1.29 1.29l-1.293-1.29l.688-.69l1.358.15zM9.63 14.076l.87-.868l1.29 1.292l-1.29 1.29l-.565-.563l-.304-1.152zm-.295-1.12l-.328-1.24l.785.785zM21.79 16.5l-1.29 1.29l-1.293-1.29l1.292-1.293zm-.583-2l1.292-1.292l1.29 1.292l-1.29 1.292zM18.5 15.79l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.292-1.29l1.292-1.293zm-3.29-.71l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.293-1.29l1.292-1.293zm-3.29.707l1.29 1.292l-.784.783l-.54-2.044l.033-.033zm.802 3.197l1.197-1.197l1.29 1.292l-1.29 1.29l-1.13-1.13zm1.906-1.905l1.29-1.293l1.293 1.292l-1.29 1.29l-1.292-1.29zm3.292.707l1.292 1.292l-1.292 1.29l-1.292-1.29zm.708-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm3.29.707l1.293 1.292l-1.29 1.29l-1.292-1.292zm.71-.708l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293L27.79 14.5l-1.29 1.292l-1.293-1.293zm-.71-.708l-1.155-1.156l2.082.23zM21.792 12.5l-1.29 1.292l-1.293-1.292l.29-.29l2.253.25zm-7.29-.71l-.152-.15l.273.03l-.12.12zm-4 .002l-.65-.65l1.17.13zm4 9.415l1.205 1.205h-2.41zm4 0l1.205 1.206h-2.412zm4 0l1.207 1.207h-2.414zm.707-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm2-2l1.292-1.292l1.29 1.29l-1.29 1.293l-1.293-1.29zm3.292-.71l-1.292-1.29l1.29-1.292l.445.444l-.43 2.124l-.014.015zm.5-4.5l-.5.5l-.66-.657l1.017.112c.054.008.1.026.144.044zM13.488 27.993a.297.297 0 0 1 0-.593a.296.296 0 0 1 0 .591zm13.323-5.58h-1.517l1.207-1.207l.93.93c-.187.17-.423.29-.62.277"></path></svg>
                    &nbsp;Add to cart
                </div>

                <div className={styles.btn2}>{product.price}&nbsp;$</div>


            </div>

            <div className={`my-4 ${styles.more}`} style={{ width: '100%', padding: '1vw', display: 'flex flex-column', backgroundColor: '#eee', borderRadius: '10px' }}>
                <div className='d-flex justify-content-around' style={{ width: '100%', borderBottom: '1px solid #999' }}>
                    <div style={{ padding: '.5vw', width: '33%' }}>
                        <p style={{ color: '#666' }}>Fabric</p>
                        <p>{product.fabric}</p>
                    </div>
                    <div style={{ borderRight: '1px solid #999' }}></div>
                    <div style={{ padding: '.5vw', width: '33%' }}>
                        <p style={{ color: '#666' }}>Pattern</p>
                        <p>{product.pattern}</p>
                    </div>
                    <div style={{ borderRight: '1px solid #999' }}></div>
                    <div style={{ padding: '.5vw', width: '33%' }}>
                        <p style={{ color: '#666' }}>Fit</p>
                        <p>{product.fit}</p>
                    </div>
                </div>

                <div className='d-flex justify-content-around' style={{ width: '100%' }}>
                    <div style={{ padding: '.5vw', width: '33%' }}>
                        <p style={{ color: '#666' }}>Neck</p>
                        <p>{product.neck}</p>
                    </div>
                    <div style={{ borderRight: '1px solid #999' }}></div>
                    <div style={{ padding: '.5vw', width: '33%' }}>
                        <p style={{ color: '#666' }}>Sleeve</p>
                        <p>{product.sleeve}</p>
                    </div>
                    <div style={{ borderRight: '1px solid #999' }}></div>
                    <div style={{ padding: '.5vw', width: '33%' }}>
                        <p style={{ color: '#666' }}>style</p>
                        <p>{product.style}</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

const blue = {
    100: '#daecff',
    200: '#b6daff',
    300: '#66b2ff',
    400: '#3399ff',
    500: '#007fff',
    600: '#0072e5',
    700: '#0059B2',
    800: '#004c99',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const StyledInputRoot = styled('div')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: baseline;
  `,
);

const StyledInput = styled('input')(
    ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#ddd'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[500]};
    box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.1)'
        };
    border-radius: 8px;
    margin: 0 8px;
    margin-top: 20px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  `,
);

const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[400]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? blue[700] : 'var(--mainColorHover)'};
      border-color: ${theme.palette.mode === 'dark' ? blue[500] : 'var(--mainColorHover)'};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `,
);