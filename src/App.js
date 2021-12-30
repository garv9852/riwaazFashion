import './App.css';
import Header from "./components/header.js"
import Card from "./components/card"
import Items from './components/items';
import Productpage from './components/productpage';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from  'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/product/:username" element={<Productpage/>}/>
          <Route path="/" element={<><Card/> <Items/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
