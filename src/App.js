import { Route,Routes } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PlaceOrder from './pages/PlaceOrder';
import OrderConfirmation from './pages/OrderConfirmation';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='/confirmorder' element={<OrderConfirmation/>}/>
    </Routes>
    </>
  );
}
export default App;
