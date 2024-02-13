import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import NewArrival from './components/NewArrival'
import ItemsArrival from './components/ItemsArrival'
import ShopByAges from './components/ShopByAges'
import AgesItems from './components/AgesItems'
import MostSellingToys from './components/MostSellingToys'
import SellingItems from './components/SellingItems'
import Discount from './components/Discount'
import ToysDiscount  from './components/ToysDiscount'
import ToysImages from './components/ToysImages'
import BackToTop from './components/BackToTop'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header />
      <Menu />
      <NewArrival />
      <ItemsArrival />
      <ShopByAges />
      <AgesItems />
      <MostSellingToys />
      <SellingItems />
      <Discount />
      <ToysDiscount />
      <ToysImages />
      <BackToTop />

    </div>
    
    
  )
  
}

export default App
