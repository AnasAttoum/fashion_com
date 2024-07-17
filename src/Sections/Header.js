import { Outlet, useParams, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import { useEffect } from 'react'

export default function Header() {
    const IsLogged = useSelector(state => state.IsLogged.log)
    const param = useParams()
    const location = useLocation()

    useEffect(() => {
        if (param.type) {
            document.getElementById('list').childNodes.forEach(element => {
                element.style.color = 'black'
            });

            document.getElementById(param.type.toLocaleLowerCase()).style.color = 'var(--mainColor)'
        }
        else {
            document.getElementById('list').childNodes.forEach(element => {
                element.style.color = 'black'
            });

            document.getElementById('shop').style.color = 'var(--mainColor)'
        }


        Array.from(document.getElementsByClassName(styles.icon)).forEach(element => {
            element.style.backgroundColor = '#ddd'
        })
        const path = location.pathname.slice(1).toLowerCase()
        if (path === 'fav' || path === 'cart' || path === 'account') {
            document.getElementById(path).style.backgroundColor = 'var(--mainColorHover)'
        }


    }, [param,location.pathname])

    function click(e) {
        if (window.screen.width <= 900) {
            if (document.getElementById('list').style.display === 'flex')
                document.getElementById('list').style.display = 'none';
            else
                document.getElementById('list').style.display = 'flex';
        }

    }
    function removeClick(e) {
        if (window.screen.width <= 900) {
            document.getElementById('list').style.display = 'none';
        }
    }

    return (
        <>
            <div className='d-flex justify-content-around align-items-center' style={{ height: '65px' }}>
                <div className={styles.brandName}>Fashion COM</div>

                <span className={styles.responsive}>
                    <span style={{ cursor: 'pointer' }} onClick={click}>
                        Categories
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" fillRule="evenodd" d="m6 7l6 6l6-6l2 2l-8 8l-8-8z"></path></svg>
                    </span>

                    <div className={styles.list} id='list' onClick={removeClick}>
                        <Link to='/' id='shop' className={`mx-4 ${styles.link}`}>S h o p</Link>
                        <Link to='men' id='men' className={`mx-4 ${styles.link}`}>M e n</Link>
                        <Link to='women' id='women' className={`mx-4 ${styles.link}`} >W o m e n</Link>
                        {/* <Link to='combos' id='combos' className={`mx-4 ${styles.link}`}>C o m b o s</Link>
                        <Link to='joggers' id='joggers' className={`mx-4 ${styles.link}`}>J o g g e r s</Link> */}
                    </div>
                </span>

                {/* <div>
                    <input type="search" className={styles.search} name="search" placeholder='Search...' required></input>
                    <button className={styles.searchBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="black" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path></svg>
                    </button>
                </div> */}

                <div id='icons' className='d-flex'>
                    <Link to='fav'>
                        <div id='fav' className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 32 32"><path fill="black" d="M22.45 6a5.47 5.47 0 0 1 3.91 1.64a5.7 5.7 0 0 1 0 8L16 26.13L5.64 15.64a5.7 5.7 0 0 1 0-8a5.48 5.48 0 0 1 7.82 0l2.54 2.6l2.53-2.58A5.44 5.44 0 0 1 22.45 6m0-2a7.47 7.47 0 0 0-5.34 2.24L16 7.36l-1.11-1.12a7.49 7.49 0 0 0-10.68 0a7.72 7.72 0 0 0 0 10.82L16 29l11.79-11.94a7.72 7.72 0 0 0 0-10.82A7.5 7.5 0 0 0 22.45 4"></path></svg>
                        </div>
                    </Link>
                    <div id='cart' className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 32 32"><path fill="black" d="M29.02 11.754L8.416 9.474L7.16 4.715a.758.758 0 0 0-.727-.558H3.34a1.214 1.214 0 0 0-.963-.49a1.24 1.24 0 1 0 0 2.483c.4 0 .738-.2.965-.492h2.512l5.23 19.8a3.282 3.282 0 0 0-.89 2.242a3.29 3.29 0 0 0 3.292 3.293a3.296 3.296 0 0 0 3.297-3.293a3.19 3.19 0 0 0-.093-.743h5.533a3.25 3.25 0 0 0-.092.743c0 1.82 1.476 3.293 3.296 3.293S28.72 29.52 28.72 27.7a3.296 3.296 0 0 0-3.294-3.297c-.95 0-1.8.41-2.402 1.053h-7.136a3.276 3.276 0 0 0-2.402-1.053c-.38 0-.738.078-1.077.196l-.182-.686H26.81a2.5 2.5 0 0 0 2.39-1.96l1.575-7.798a2.17 2.17 0 0 0 .04-.414a1.995 1.995 0 0 0-1.795-1.988zm-3.592 16.24a.298.298 0 0 1-.297-.295c.003-.166.135-.298.298-.298s.295.132.297.297a.298.298 0 0 1-.297.294zm1.78-7.495l.948-.95l-.318 1.58zm-14.453-9.037L13.79 12.5l-1.29 1.29l-1.293-1.29l1.087-1.088zm4.498.498l.538.54l-1.29 1.29l-1.293-1.29l.688-.69l1.358.15zM9.63 14.076l.87-.868l1.29 1.292l-1.29 1.29l-.565-.563l-.304-1.152zm-.295-1.12l-.328-1.24l.785.785zM21.79 16.5l-1.29 1.29l-1.293-1.29l1.292-1.293zm-.583-2l1.292-1.292l1.29 1.292l-1.29 1.292zM18.5 15.79l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.292-1.29l1.292-1.293zm-3.29-.71l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.293-1.29l1.292-1.293zm-3.29.707l1.29 1.292l-.784.783l-.54-2.044l.033-.033zm.802 3.197l1.197-1.197l1.29 1.292l-1.29 1.29l-1.13-1.13zm1.906-1.905l1.29-1.293l1.293 1.292l-1.29 1.29l-1.292-1.29zm3.292.707l1.292 1.292l-1.292 1.29l-1.292-1.29zm.708-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm3.29.707l1.293 1.292l-1.29 1.29l-1.292-1.292zm.71-.708l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293L27.79 14.5l-1.29 1.292l-1.293-1.293zm-.71-.708l-1.155-1.156l2.082.23zM21.792 12.5l-1.29 1.292l-1.293-1.292l.29-.29l2.253.25zm-7.29-.71l-.152-.15l.273.03l-.12.12zm-4 .002l-.65-.65l1.17.13zm4 9.415l1.205 1.205h-2.41zm4 0l1.205 1.206h-2.412zm4 0l1.207 1.207h-2.414zm.707-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm2-2l1.292-1.292l1.29 1.29l-1.29 1.293l-1.293-1.29zm3.292-.71l-1.292-1.29l1.29-1.292l.445.444l-.43 2.124l-.014.015zm.5-4.5l-.5.5l-.66-.657l1.017.112c.054.008.1.026.144.044zM13.488 27.993a.297.297 0 0 1 0-.593a.296.296 0 0 1 0 .591zm13.323-5.58h-1.517l1.207-1.207l.93.93c-.187.17-.423.29-.62.277"></path></svg>
                    </div>
                    {
                        IsLogged ?
                            <div id='account' className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="black" strokeWidth={1.5}><path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><circle cx={12} cy={7} r={3}></circle></g></svg>
                            </div>
                            :
                            <Link to='joinus' style={{ textDecoration: 'none' }}>
                                <div className={styles.join}>
                                    Join Us
                                </div>
                            </Link>
                    }

                </div>
            </div>

            <Outlet />
        </>
    )
}