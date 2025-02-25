
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop'
import Shopcategory from './pages/Shopcategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import men_banner from './components/assests/banner_mens.png'
import women_banner from './components/assests/banner_women.png'
import kid_banner from './components/assests/banner_kids.png'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Shop}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner}category="men"/> }/>
        <Route path='/womens' element={<Shopcategory banner={women_banner}category="women"/> }/>
        <Route path='/kids' element={<Shopcategory banner={kid_banner}category="kid"/> }/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' Component={Cart}/>
        <Route path='/login' Component={LoginSignup}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
