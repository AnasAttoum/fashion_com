import styles from './MainBreak.module.css'

export default function MainBreak() {
    return (
        <div className={`d-flex justify-content-center ${styles.container}`} style={{ marginTop: '15vw' }}>
            <div style={{width:'40%',position:'relative'}}>
                <div className={styles.left}></div>
                <div className={styles.para}>
                    <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
                    <h6>In our journey to improve every day fashion.<br/>Fashion COM presents EVERDAY wear range - Comfortable & Affordable fashion 24/7</h6>
                </div>
            </div>

            <img src="Images/BreakRight.jpg" alt="Fashion" className={styles.right}/>
        </div>
    )
}