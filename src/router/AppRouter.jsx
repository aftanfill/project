import { Route, Routes,  } from 'react-router-dom'
import HomePages from '../pages/HomePages/HomePages'
import Header from '../components/Header/Header'
import CatalogPages from '../pages/CatalogPages/CatalogPages'
import Footer from '../components/Footer/Footer'
import ProductsPages from '../pages/ProductsPages/ProductsPages'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Header/>}>
            <Route path='Home' element={<HomePages/>}/>
            <Route path='Catalog' element={<CatalogPages/>} />
            <Route path='Products' element={<ProductsPages/>} />
            <Route path='/' element={<Footer/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter