import { useParams } from 'react-router-dom'

import styles from './FilterOptions.module.css'
import TrackInvertedSlider from './Range'

export default function FilterOptions({ setShowOriginal, data, setData }) {
  const params = useParams()

  const filterCategories = (e) => {
    if (e.target.id !== 'options') {
      setData({ ...data, category: e.target.id })
      setShowOriginal(false)
      document.getElementById('options').childNodes.forEach(element => {
        element.style.color = 'black'
      })
      e.target.style.color = '#666'
    }
  }

  const filterSize = (e) => {
    if (e.target.id !== 'sizes') {
      setData({ ...data, size: e.target.id })
      setShowOriginal(false)

      document.getElementById('sizes').childNodes.forEach(element => {
        element.style.backgroundColor = 'white'
      })
      e.target.style.backgroundColor = '#999'
    }
  }

  return (
    <div className={`d-flex flex-column ${styles.responsive}`} style={{ width: '215px' }}>
      <div className={styles.container}>
        <h4 style={{ color: 'var(--mainColor)' }}>Filter</h4>
        <hr />
        <div className={styles.options} id='options' onClick={filterCategories}>
          <div id='jacket'>Jackets</div>
          <div id='top'>Tops</div>
          {params.type === 'women' ? <div id='dress'>Dresses</div> : ''}
          <div id='printedTShirt'>Printed T-shirts</div>
          <div id='plainTShirt'>Plain T-shirts</div>
          <div id='fullSleeveTShirt'>Full sleeve T-shirts</div>
          <div id='joggers'>Joggers</div>
          <div id='pants'>Pants</div>
        </div>
      </div>

      <div className={styles.container} style={{ borderTop: 'none' }}>
        <h4 style={{ color: 'var(--mainColor)' }}>Price</h4>
        <hr />
        <div className='d-flex flex-column align-items-center'>
          <TrackInvertedSlider setShowOriginal={setShowOriginal} data={data} setData={setData}/>
        </div>
      </div>

      <div className={styles.container} style={{ borderTop: 'none' }}>
        <h4 style={{ color: 'var(--mainColor)' }}>Size</h4>
        <hr />
        <div id='sizes' onClick={filterSize}>
          <div id='XXS' className={styles.size}>XXS</div>
          <div id='XS' className={styles.size}>XS</div>
          <div id='S' className={styles.size}>S</div>
          <div id='M' className={styles.size}>M</div>
          <div id='L' className={styles.size}>L</div>
          <div id='XL' className={styles.size}>XL</div>
          <div id='XXL' className={styles.size}>XXL</div>
          <div id='3XL' className={styles.size}>3XL</div>
          <div id='4XL' className={styles.size}>4XL</div>
        </div>
      </div>
    </div>

  )
}
