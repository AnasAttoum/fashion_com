import styles from './Filter.module.css'
import FilterOptions from "../Components/FilterOptions";
import Title from "../Components/Title";
import CardProduct from "../Components/CardProduct";
import Footer from '../Sections/Footer'

export default function Filter() {
  return (
    <>
      <div className={`d-flex m-5 ${styles.responsive}`}>
        <FilterOptions />

        <div>
          <Title title='Categories For Women' />
          <div className='d-flex flex-wrap justify-content-evenly p-5' style={{ columnGap: '0px' }}>
            <CardProduct img='/Images/Products/Beautiful dress.jpg' alt='dresses' name='Hoodies & Sweetshirtes' />
            <CardProduct img='/Images/Products/photo_2024-07-10_16-38-47.jpg' alt='Hoodies & Sweetshirt' name='Hoodies & Sweetshirt' />
            <CardProduct img="/Images/Products/Solid High Waist Pants, Casual Belted Wide Leg Pants, Women's Clothing - Temu.jpg" alt='Pants' name='Pants' />
            <CardProduct img='/Images/Products/Colorblock Longline Coat.jpg' alt='Coats' name='Coats' />
            <CardProduct img='/Images/Products/Manfinity Homme 1 Peça Jaqueta Acolchoada Masculina Com Forro Térmico E Hem Com Cordão Para AjusteDescobri produtos incríveis no SHEIN_com, venha conferir!.jpg' alt='Jackets' name='Jackets' />
            <CardProduct img='/Images/Products/Men Antlers Embroidery Colourblock Shirt Without Tee.jpg' alt='Shirts' name='Shirts' />
            <CardProduct img='/Images/Products/Men Contrast Trim Patched Pocket Tee.jpg' alt='Plain T-Shirts' name='Plain T-Shirts' />
            <CardProduct img='/Images/Products/photo_2024-07-10_16-17-55.jpg' alt='Polo T-Shirts' name='Polo T-Shirts' />
            <CardProduct img='/Images/Products/Men Color-block Letter Embroidery Drawstring Hoodie.jpg' alt='Hoodies & Sweetshirt' name='Hoodies & Sweetshirt' />
            <CardProduct img='/Images/Products/CHRISTINA HIGH _ JOURNEY LIGHT USED - JOURNEY LIGHT USED _ 30 _ 32.jpg' alt='Jeans' name='Jeans' />
            <CardProduct img="/Images/Products/photo_2024-07-10_16-19-40.jpg" alt='Activewear' name='Activewear' />
            <CardProduct img='/Images/Products/Manfinity Homme 1 Peça Jaqueta Acolchoada Masculina Com Forro Térmico E Hem Com Cordão Para AjusteDescobri produtos incríveis no SHEIN_com, venha conferir!.jpg' alt='Jacket' name='Jacket' />
            <CardProduct img='/Images/Products/Cute Spaghetti Straps V Neck Knee Length Short Prom Dress, Homecoming Dress H1011.jpg' alt='Dress' name='Dress' />
            <CardProduct img='/Images/Products/Color Block Cactus Embroidered Hoodie - L.jpg' alt='Hoody' name='Hoody' />
            <CardProduct img='/Images/Products/398769ae0deca4d746aa3c88d6eb8e27.jpg' alt='Top' name='Top' />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )

}
