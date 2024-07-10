import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from "./Pages/Main";
import Header from './Sections/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Header />}>
            <Route index element={<Main />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
