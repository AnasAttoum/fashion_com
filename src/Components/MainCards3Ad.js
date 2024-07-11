import styles from './MainCards3Ad.module.css'

export default function MainCards3Ad({ img1, alt1, img2, alt2, img3, alt3 }) {
  return (
    <div className={`d-flex justify-content-evenly gap:5 ${styles.container}`}>
      <img src={img1} alt={alt1} className={styles.img} />
      <img src={img2} alt={alt2} className={styles.img} />
      <img src={img3} alt={alt3} className={styles.img} />
    </div>
  )
}