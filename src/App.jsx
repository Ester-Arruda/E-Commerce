import './App.css';
import "@fontsource/roboto";

import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { SellerInfo } from './components/SellerInfo/SellerInfo'
import { UserQuestion } from './components/UserQuestion/UserQuestion'
import { Comments } from './components/Comments/Comments'
import { RelatedProducts } from './components/RelatedProducts/RelatedProducts'
import { Navbar } from './components/Navbar/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <ProductDetails productId={1}/>
      <SellerInfo sellerId={2}/>
      <UserQuestion/>
      <Comments/>
      <RelatedProducts/>
    </>
  )
}
