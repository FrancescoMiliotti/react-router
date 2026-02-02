import { useState } from 'react'
import axios from "axios";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";



function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>



  </BrowserRouter>;
}

export default App
