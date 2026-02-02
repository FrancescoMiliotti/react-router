import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DefaultLayout from './layouts/DefaultLayout';




function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>

    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" Component={HomePage} />
        <Route path="/ChiSiamo" Component={ChiSiamo} />
        <Route path="/Prodotti" Component={Prodotti} />
      </Route>
    </Routes>



  </BrowserRouter>;
}

export default App
