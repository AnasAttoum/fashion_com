import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Sections/Header';
import Main from "./Pages/Main";
import Filter from './Pages/Filter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Header />}>
            <Route index element={<Main />} />
            <Route path='filter/:type' element={<Filter />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
