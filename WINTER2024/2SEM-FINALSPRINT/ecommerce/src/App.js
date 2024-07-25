import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
// import Scroll from './Components/Navbar/Scroll.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProductList from './Pages/ProductList.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import ShoppingCart from './Pages/ShoppingCart.jsx';
//import CheckOut from './Pages/CheckOut.jsx';
import Product from './Pages/Product.jsx';
import Account from './Pages/Account.jsx';
import lap8 from './Components/Assets/lap8.jpg';
import av6 from './Components/Assets/av6.jpg';
import tv4 from './Components/Assets/tv4.jpeg';


  
function App() {
  return (
   
     <div className='mainbox'>
      <BrowserRouter>
      < Navbar />
    
       {/* <Scroll /> */}
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/tv&monitors' element={<ProductDetails banner={tv4} category="tv&monitors"/>}/>
        <Route path='/audio&videos' element={<ProductDetails banner={av6} category="audio&videos"/>}/> 
        <Route path='/laptops&tablets' element={<ProductDetails banner={lap8} category="laptops&tablets"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
    
        <Route path='/cart' element={<ShoppingCart/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
       </BrowserRouter> 
    </div>
  
  );
}

export default App;
