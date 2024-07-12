import styles from './ProductGallery.module.css'

export default function ProductGallery() {
  return (
    <div className={`d-flex ${styles.container}`}>
        <div className={`d-flex flex-column m-5 ${styles.smallImages}`}>
            <img src="/Images/Products/398769ae0deca4d746aa3c88d6eb8e27.jpg" alt="" />
            <img src="/Images/Products/Color Block Cactus Embroidered Hoodie - L.jpg" alt="" />
            <img src="/Images/Products/photo_2024-07-10_16-19-40.jpg" alt="" />
        </div>
        <div className={styles.mainImg}/>
    </div>
  )
}
