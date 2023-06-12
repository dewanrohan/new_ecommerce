import './App.css';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Register from './Routes/Register';
import Allreadyuser from './Routes/Allreadyuser';
import Addproduct from './Routes/Addproduct';
import Aboutus from './Routes/Aboutus';
import Products from "./Routes/Products";
import { Route, Routes } from "react-router-dom";
import Pagetwo from './Routes/Pagetwo';
import Pagethree from './Routes/Pagethree';
import Pagefour from './Routes/Pagefour';
import Page404 from './Routes/page404';
import Cart from './Routes/Cart';
import { Provider } from 'react-redux';
import mystore from './Store/Store';

function App() {
  return (
    <div>
      <Provider store={mystore}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Register />} path="/register" />
          <Route element={<Allreadyuser />} path="/login" />
          <Route element={<Addproduct />} path="/addproduct" />
          <Route element={<Aboutus />} path="/about" />
          <Route element={<Products />} path="/product" />
          <Route element={<Pagetwo />} path="/page2" />
          <Route element={<Pagethree />} path="/page3" />
          <Route element={<Pagefour />} path="/page4" />
          <Route element={<Page404 />} path="*" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </Provider>
    </div>
  );
}
export default App;
