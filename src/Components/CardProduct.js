import { Link } from 'react-router-dom'

import styles from './CardProduct.module.css'

export default function CardProduct({ index, type, img, name, price }) {

  return (
    <Link to={'/' + type + '/' + index} style={{ textDecoration: 'none' }}>
      <div className={`mb-5 ${styles.container}`}>
        <img src={img} alt={name} className={styles.img} />
        <p className='mb-0' style={{ width: '260px' }} id='nameElement'>{name.length >= 95 ? <span>{name.slice(0, 80)}<span style={{ color: '#999' }}> ... See More</span></span> : name}</p>
        <div className='d-flex justify-content-between'>
          <p className={styles.explore}>
            Explore Now
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7"></path></svg>
          </p>
          <p style={{ color: 'var(--mainColor)' }}>{price}$</p>
        </div>
      </div>
    </Link>
  )
}