import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../../component/Header'
import { ProductGrid } from './ProductsGrid';

// import { products } from '../../starting-code/data/products'
import './HomePage.css'


export function HomePage({ cart, loadCart }) {
const [products, setProducts] = useState([]);

const [searchParams] = useSearchParams()

const search = searchParams.get('search')

  // const urlPath = search ? `/api/products?search=${search}`
  // : `/api/products`;

  const urlPath = search
  ? `https://ecommerce-backend-14uf.onrender.com/api/products?search=${search}`
  : `https://ecommerce-backend-14uf.onrender.com/api/products`;

  useEffect(()=>{
    const getHomeData = (async ()=>{
      const response = await axios.get(urlPath)
     
      setProducts(response.data)
 
      });

      getHomeData()
  }, [search])


  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products = {products} loadCart={loadCart}/>
      </div>
    </>
  );
}