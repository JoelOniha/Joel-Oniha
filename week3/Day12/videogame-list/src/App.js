import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import GamesPage from './components/GamesPage';
import AddGamePage from './components/AddGamePage';
function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<GamesPage />}></Route>
    <Route path='/add-game' element= {<AddGamePage/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
