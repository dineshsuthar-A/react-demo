
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LibraryHome from './components/LibraryHome';
import Issued from './components/Issued';

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LibraryHome />} />
        <Route path="issued" index element={<Issued />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
