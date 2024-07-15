import { useParams } from 'react-router-dom'
import { store } from '../'

import styles from './Filter.module.css'
import FilterOptions from "../Components/FilterOptions";
import Title from "../Components/Title";
import CardProduct from "../Components/CardProduct";
import Footer from '../Sections/Footer'
import { useEffect, useState } from 'react';

export default function Filter() {
  
  const [dataFromFilter, setDataFromFilter] = useState()
  const [data, setData] = useState({
    category: ['jacket', 'top', 'dress', 'printedTShirt', 'PlainTShirt', 'fullSleeveTShirt', 'joggers', 'pants'],
    low: 0,
    high: 500,
    size: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']
  })
  const [showOriginal, setShowOriginal] = useState(true)
  
  const param = useParams()
  let Products = store.getState().Products.filter(element => {
    return element.type === param.type
  })

  useEffect(() => {
    setDataFromFilter(store.getState().Products.filter(element => {
      return element.type === param.type
        && element.option.filter(value => { return data.category.includes(value) || data.category === value }).length !== 0
        && element.price >= data.low && element.price <= data.high
        && Object.values(element.colors)[0].size.filter(value => { return data.size.length > 4 ? data.size.includes(value) : data.size === value }).length !== 0
    }))
    // eslint-disable-next-line
  }, [data,showOriginal,param])



  return (
    <>
      <div className={`d-flex m-5 ${styles.responsive}`}>
        <FilterOptions setShowOriginal={setShowOriginal} data={data} setData={setData} />

        <div>
          <Title title={`Categories For ${param.type.charAt(0).toUpperCase() + param.type.slice(1)}`} />
          {showOriginal
            ? <div className={`d-flex flex-wrap justify-content-evenly p-5 ${styles.cardProduct}`} style={{ columnGap: '0px' }}>
              {Products.map((element, index) => {
                return <CardProduct key={index} index={element.id} type={element.type} img={element.url} name={element.name} price={element.price} />
              })}
            </div>
            : <div className={`d-flex flex-wrap justify-content-evenly p-5 ${styles.cardProduct}`} style={{ columnGap: '0px' }}>
              {dataFromFilter.map((element, index) => {
                return <CardProduct key={index} index={element.id} type={element.type} img={element.url} name={element.name} price={element.price} />
              })}
            </div>}

        </div>

      </div>
      <Footer />
    </>
  )

}
