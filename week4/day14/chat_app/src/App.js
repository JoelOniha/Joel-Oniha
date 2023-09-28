import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/common/Navbar";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./components/auth/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/login"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
