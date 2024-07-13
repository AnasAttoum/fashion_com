import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Sections/Header';
import Main from "./Pages/Main";
import Filter from './Pages/Filter';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Header />}>
            <Route index element={<Main />} />
            <Route path=':type' element={<Filter />} />
            <Route path=':type/:productId' element={<Product />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
