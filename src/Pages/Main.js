import MainCarouselComponent from "../Sections/MainCarouselComponent";
import MainCardsAd from "../Sections/MainCardsAd";
import Title from "../Components/Title";
import CardProduct from "../Components/CardProduct";
import MainCards3Ad from "../Sections/MainCards3Ad";
import MainBreak from "../Sections/MainBreak";
import Footer from "../Sections/Footer";

export default function Main() {
  return (
    <>
      <MainCarouselComponent />

      <MainCardsAd img1='Images/Card1.png' alt1='High Coziness Up To 50% OFF' img2='Images/Card2.png' alt2='High Coziness Up To 50% OFF' />

      <Title title='New Arrival' />
      <div className='d-flex flex-wrap justify-content-evenly m-5 p-5'>
        <CardProduct img='Images/Products/Manfinity Homme 1 Peça Jaqueta Acolchoada Masculina Com Forro Térmico E Hem Com Cordão Para AjusteDescobri produtos incríveis no SHEIN_com, venha conferir!.jpg' alt='Jacket' name='Jacket' />
        <CardProduct img='Images/Products/Cute Spaghetti Straps V Neck Knee Length Short Prom Dress, Homecoming Dress H1011.jpg' alt='Dress' name='Dress' />
        <CardProduct img='Images/Products/Color Block Cactus Embroidered Hoodie - L.jpg' alt='Hoody' name='Hoody' />
        <CardProduct img='Images/Products/398769ae0deca4d746aa3c88d6eb8e27.jpg' alt='Top' name='Top' />
      </div>

      <Title title='Big Saving Zone' />
      <MainCards3Ad img1='Images/Card3.png' alt1='High Coziness Up To 50% OFF' img2='Images/Card4.png' alt2='High Coziness Up To 50% OFF' img3='Images/Card5.png' alt3='High Coziness Up To 50% OFF' />
      <MainCardsAd img1='Images/Card6.png' alt1='High Coziness Up To 50% OFF' img2='Images/Card7.png' alt2='High Coziness Up To 50% OFF' />

      <MainBreak />

      <Title title='Categories For Men' />
      <div className='d-flex flex-wrap justify-content-evenly m-5 p-5'>
        <CardProduct img='Images/Products/Manfinity Homme 1 Peça Jaqueta Acolchoada Masculina Com Forro Térmico E Hem Com Cordão Para AjusteDescobri produtos incríveis no SHEIN_com, venha conferir!.jpg' alt='Jackets' name='Jackets' />
        <CardProduct img='Images/Products/Men Antlers Embroidery Colourblock Shirt Without Tee.jpg' alt='Shirts' name='Shirts' />
        <CardProduct img='Images/Products/Men Contrast Trim Patched Pocket Tee.jpg' alt='Plain T-Shirts' name='Plain T-Shirts' />
        <CardProduct img='Images/Products/photo_2024-07-10_16-17-55.jpg' alt='Polo T-Shirts' name='Polo T-Shirts' />
        <CardProduct img='Images/Products/Men Color-block Letter Embroidery Drawstring Hoodie.jpg' alt='Hoodies & Sweetshirt' name='Hoodies & Sweetshirt' />
        <CardProduct img='Images/Products/CHRISTINA HIGH _ JOURNEY LIGHT USED - JOURNEY LIGHT USED _ 30 _ 32.jpg' alt='Jeans' name='Jeans' />
        <CardProduct img="Images/Products/photo_2024-07-10_16-19-40.jpg" alt='Activewear' name='Activewear' />
        <CardProduct img='Images/Products/photo_2024-07-10_16-27-29.jpg' alt='Socks' name='Socks' />
      </div>

      <Title title='Categories For Women' />
      <div className='d-flex flex-wrap justify-content-evenly m-5 p-5'>
        <CardProduct img='Images/Products/Beautiful dress.jpg' alt='dresses' name='Hoodies & Sweetshirtes' />
        <CardProduct img='Images/Products/photo_2024-07-10_16-38-47.jpg' alt='Hoodies & Sweetshirt' name='Hoodies & Sweetshirt' />
        <CardProduct img="Images/Products/Solid High Waist Pants, Casual Belted Wide Leg Pants, Women's Clothing - Temu.jpg" alt='Pants' name='Pants' />
        <CardProduct img='Images/Products/Colorblock Longline Coat.jpg' alt='Coats' name='Coats' />
      </div>
      
      <Footer/>
    </>
  )
}