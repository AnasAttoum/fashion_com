import styles from './MainCardsAd.module.css'

export default function MainCardsAd({ img1, alt1, img2, alt2 }) {
  return (
    <div className={`d-flex justify-content-evenly gap:5 ${styles.container}`}>
      <img src={img1} alt={alt1} className={styles.img} />
      <img src={img2} alt={alt2} className={styles.img} />
    </div>
  )
}