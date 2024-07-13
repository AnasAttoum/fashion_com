import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Product.module.css'
import { store } from '../'
import ProductGallery from "../Components/ProductGallery";
import ProductDetails from "../Components/ProductDetails";
import Title from '../Components/Title';
import CardProduct from '../Components/CardProduct';
import Footer from '../Sections/Footer';

export default function Product() {

    const param = useParams()
    let product = store.getState().Products.find(element => { return element.id === parseInt(param.productId) })
    let Color = Object.values(product.colors)[0]

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }, [param])


    return (
        <>
            <div className={`d-flex mt-3 ${styles.container}`}>
                <ProductGallery index={product.id} mainPic={Color.mainPic} pics={Color.pics} name={product.name} />
                <ProductDetails product={product} color={Color} />
            </div>

            <div className={`d-flex flex-wrap justify-content-evenly my-5 p-5 ${styles.break}`} style={{ rowGap: '30px', backgroundColor: '#222', color: 'white' }}>
                <div className='d-flex align-items-center' style={{ width: '25%' }}>
                    <span className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 14 14"><g fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11.5v2m2.5-3v2m-5-2v2M2.75 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.5.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m-3.186-.861a.833.833 0 0 0-.786-.556h-.645a.744.744 0 0 0-.16 1.47l.983.216a.834.834 0 0 1-.178 1.648h-.556a.834.834 0 0 1-.786-.556M7 2.833V2m0 5v-.833"></path><path d="M12.5.5h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></path></g></svg></span>
                    <h3>Secure Payment</h3>
                </div>
                <div className='d-flex align-items-center' style={{ width: '25%' }}>
                    <span className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#333" d="M247.59 61.22L195.83 33a8 8 0 0 0-3.83-1h-32a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H64a8 8 0 0 0-3.84 1L8.41 61.22a15.76 15.76 0 0 0-6.59 21.26l19.27 36.81A16.37 16.37 0 0 0 35.67 128H56v80a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-80h20.34a16.37 16.37 0 0 0 14.58-8.71l19.27-36.81a15.76 15.76 0 0 0-6.6-21.26M35.67 112a.62.62 0 0 1-.41-.13L16.09 75.26L56 53.48V112ZM184 208H72V48h16.8a40 40 0 0 0 78.38 0H184Zm36.75-96.14a.55.55 0 0 1-.41.14H200V53.48l39.92 21.78Z"></path></svg></span>
                    <h3>Size & Fit</h3>
                </div>
                <div className='d-flex align-items-center' style={{ width: '25%' }}>
                    <span className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="#333" d="M0 6v2h19v15h-6.156c-.446-1.719-1.992-3-3.844-3c-1.852 0-3.398 1.281-3.844 3H4v-5H2v7h3.156c.446 1.719 1.992 3 3.844 3c1.852 0 3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3c1.852 0 3.398-1.281 3.844-3H32v-8.156l-.063-.157l-2-6L29.72 10H21V6zm1 4v2h9v-2zm20 2h7.281L30 17.125V23h-1.156c-.446-1.719-1.992-3-3.844-3c-1.852 0-3.398 1.281-3.844 3H21zM2 14v2h6v-2zm7 8c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m16 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></path></svg></span>
                    <h3>Free Shipping</h3>
                </div>
                <div className='d-flex align-items-center' style={{ width: '25%' }}>
                    <span className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.527 15.977h3.24c1.278-.021 3.233.652 3.233 3.08C22 21.577 19.588 22 18.766 22H7.946C5.438 22 2 21.491 2 17.17V8.002h20v4.517m-6.473 3.457a.8.8 0 0 1 .273-.58l1.702-1.42m-1.975 2a.8.8 0 0 0 .275.623l1.7 1.383M2.006 7.991l.921-2.3c.748-1.789 1.122-2.683 1.88-3.186S6.537 2 8.48 2h7.02c1.944 0 2.916 0 3.674.504c.758.503 1.131 1.397 1.88 3.185L22 7.995m-10.037.006v-6m-2 10h4" color="#333"></path></svg></span>
                    <h3>Free Returns</h3>
                </div>
            </div>

            <Title title='Similar Products' />
            <div className='d-flex flex-wrap justify-content-evenly p-5' style={{ columnGap: '10px' }}>
                {store.getState().Products.filter(element => {
                    return element.type === param.type && element.id !== parseInt(param.productId)
                }).map((element,index)=>{
                    return <CardProduct key={index} index={element.id} type={element.type} img={element.url} name={element.name} />
                })}
            </div>

            <Footer />
        </>
    )
}