import styles from './CardProduct.module.css'

export default function CardProduct({ img, alt, name }) {
  return (
    <>
      <div className={`mb-5 ${styles.container}`}>
        <img src={img} alt={alt} className={styles.img} />
        <p className='mb-0'>{name}</p>
        <p className={styles.explore}>
          Explore Now
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7"></path></svg>
        </p>
      </div>
    </>
  )
}