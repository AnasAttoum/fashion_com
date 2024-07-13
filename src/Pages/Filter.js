import { useParams } from 'react-router-dom'
import { store } from '../'

import styles from './Filter.module.css'
import FilterOptions from "../Components/FilterOptions";
import Title from "../Components/Title";
import CardProduct from "../Components/CardProduct";
import Footer from '../Sections/Footer'

export default function Filter() {

  const param = useParams()
  const Products = store.getState().Products.filter(element => {
    return element.type === param.type
  })

  return (
    <>
      <div className={`d-flex m-5 ${styles.responsive}`}>
        <FilterOptions />

        <div>
          <Title title={`Categories For ${param.type.charAt(0).toUpperCase() + param.type.slice(1)}`} />
          <div className='d-flex flex-wrap justify-content-evenly p-5' style={{ columnGap: '0px' }}>
            {Products.map((element, index) => {
              return <CardProduct key={index} index={element.id} type={element.type} img={element.url} name={element.name} />
            })}
          </div>
        </div>

      </div>
      <Footer />
    </>
  )

}
