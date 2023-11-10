import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ShopContext from '../Context/ShopContext';
import BreadCrums from '../Components/BreadCrums/BreadCrums';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>  e.id === Number(productId));
  console.log(product);
  return (
    <div>
      <BreadCrums product={product} />
    </div>
  )
}

export default Product