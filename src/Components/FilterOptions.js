import styles from './FilterOptions.module.css'
import TrackInvertedSlider from './Range'

export default function FilterOptions() {
  return (
    <div className={`d-flex flex-column ${styles.responsive}`} style={{ width: '215px' }}>
      <div className={styles.container}>
        <h4>Filter</h4>
        <hr />
        <div className={styles.options}>
          <div>Tops</div>
          <div>Printed T-shirts</div>
          <div>Plain T-shirts</div>
          <div>Full sleeve T-shirts</div>
          <div>Joggers</div>
          <div>Payjamas</div>
          <div>Jeans</div>
        </div>
      </div>

      <div className={styles.container} style={{ borderTop: 'none' }}>
        <h4>Price</h4>
        <hr />
        <div className='d-flex flex-column align-items-center'>
          <TrackInvertedSlider />
        </div>
      </div>

      <div className={styles.container} style={{ borderTop: 'none' }}>
        <h4>Size</h4>
        <hr />
        <div className={styles.size}>XXS</div>
        <div className={styles.size}>XS</div>
        <div className={styles.size}>S</div>
        <div className={styles.size}>M</div>
        <div className={styles.size}>L</div>
        <div className={styles.size}>XL</div>
        <div className={styles.size}>XXL</div>
        <div className={styles.size}>3XL</div>
        <div className={styles.size}>4XL</div>
      </div>
    </div>

  )
}
