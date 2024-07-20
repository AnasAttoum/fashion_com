import { useSelector } from 'react-redux'

import styles from './Fav.module.css'
import Title from '../Components/Title'
import CardProduct from '../Components/CardProduct'

export default function Fav() {

  const IsFav = useSelector(state => state.IsFav)
  const products = useSelector(state => state.Products)

  return (
    <>
      {IsFav.length === 0 ?
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className={styles.img} src="/Images/NoFavoritesYet.jpg" alt="No Favorites Yet" style={{ width: '30vw', height: '30vw' }} />
          <h1 className={styles.title}>No Favorites Yet</h1>
        </div>
        :
        <div className='mt-5'>
          <Title title='My Favorites'/>
          <div className='d-flex flex-wrap justify-content-evenly p-5' style={{ columnGap: '11px' }}>
            {IsFav.map((element,index) => {
              const product = products.find(value=>{return value.id===element.id})
              return <CardProduct key={index} index={product.id} type={product.type} img={element.color.mainPic} name={product.name} price={product.price} sale={product.colors[Object.keys(product.colors)[0]].sale}/>
            })}
          </div>
        </div>
      }

    </>
  )
}
