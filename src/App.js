
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/login/Login';
import Home from './components/home/Home';
import Category from './components/category/Category';
import Product from './components/product/Product';
import Categoryview from './components/category/Categoryview';
import Productview from './components/product/Productview';
import Ulogin from './components/ulogin/Ulogin';
import Usignup from './components/usignup/Usignup';
import Uhome from './components/uhome/Uhome';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Ulogin method='POST'/>}></Route>
        <Route path={'/admin'} element={<Login method='POST'/>}></Route>
        <Route path={'/home'} element={<Home />} ></Route>
        <Route path={'/uhome'} element={<Uhome />} ></Route>
        <Route path={'/category'} element={<Category/>} ></Route>
        <Route path={'/product'} element={<Product/>} ></Route>
        <Route path={'/cview'} element={<Categoryview/>} ></Route>
        <Route path={'/usignup'} element={<Usignup/>} ></Route>
        <Route path={'/pview'} element={<Productview/>} ></Route>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
