import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Sections/Header';
import Main from "./Pages/Main";
import Filter from './Pages/Filter';
import Product from './Pages/Product';
import Fav from './Pages/Fav';
import JoinUs from './Pages/JoinUs'
import Cart from './Pages/Cart';
import Account from './Pages/Account';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Header />}>
            <Route index element={<Main />} />
            <Route path=':type' element={<Filter />} />
            <Route path=':type/:productId' element={<Product />} />
            <Route path='fav' element={<Fav />} />
            <Route path='joinus' element={<JoinUs />} />
            <Route path='cart' element={<Cart />} />
            <Route path='account' element={<Account />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
