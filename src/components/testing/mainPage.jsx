import './mainpage.css';

import { Route, Routes } from "react-router-dom"

import ShowProducts from '../showProducts/showProducts.component';
import AddProducts from '../addProducts/addProducts.component';
import Navigation from '../navigation/navigation.component';
import Home from '../home/home.component';

const MainPage = () => {

  return (
    <div className='component'>
      <div className='right'>
        <Navigation />
      </div>
      <div className='divider'></div>
      <div className='left'>
        <div>
          <Routes>
            <Route path='/' element={<Home pageTitle="Home" />} />
            <Route path='/add' element={<AddProducts pageTitle="Add products" />} />
            <Route path='/show' element={<ShowProducts pageTitle="Show products" />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default MainPage;