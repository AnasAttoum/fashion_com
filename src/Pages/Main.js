import MainCarouselComponent from "../Sections/MainCarouselComponent";
import MainCardsAd from "../Components/MainCardsAd";
import Title from "../Components/Title";
import CardProduct from "../Components/CardProduct";
import MainCards3Ad from "../Components/MainCards3Ad";
import MainBreak from "../Sections/MainBreak";
import Footer from "../Sections/Footer";
import { store } from '../'

export default function Main() {
  const Products = store.getState().Products


  return (
    <>
      <MainCarouselComponent />

      <MainCardsAd img1='/Images/Card1.png' alt1='High Coziness Up To 50% OFF' img2='/Images/Card2.png' alt2='High Coziness Up To 50% OFF' />

      <Title title='New Arrival' />
      <div className='d-flex flex-wrap justify-content-evenly p-5' style={{ columnGap: '10px' }}>
        {Products.slice(0, 4).map((element, index) => {
          return <CardProduct key={index} index={element.id} type={element.type} img={element.url} name={element.name} />
        })}
      </div>

      <Title title='Big Saving Zone' />
      <MainCards3Ad img1='/Images/Card3.png' alt1='High Coziness Up To 50% OFF' img2='/Images/Card4.png' alt2='High Coziness Up To 50% OFF' img3='/Images/Card5.png' alt3='High Coziness Up To 50% OFF' />
      <MainCardsAd img1='/Images/Card6.png' alt1='High Coziness Up To 50% OFF' img2='/Images/Card7.png' alt2='High Coziness Up To 50% OFF' />

      <MainBreak />

      <Title title='Categories For Men' />
      <div className='d-flex flex-wrap justify-content-evenly p-5' style={{ columnGap: '11px' }}>
        {Products.filter(element=>{return element.type==='men'}).slice(0, 8).map((element, index) => {
          return <CardProduct key={index} index={element.id} type={element.type} img={element.url} name={element.name} />
        })}
      </div>

      <Title title='Categories For Women' />
      <div className='d-flex flex-wrap justify-content-evenly p-5' style={{ columnGap: '11px' }}>
      {Products.filter(element=>{return element.type==='women'}).slice(0, 8).map((element, index) => {
          return <CardProduct key={index} index={element.id} type={element.type} img={element.url} name={element.name} />
        })}
      </div>

      <Footer />
    </>
  )
}