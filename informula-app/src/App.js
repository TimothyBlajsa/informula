/* eslint-disable array-callback-return */
import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import Product from '../src/Product';
import axios from 'axios';
import './App.css';

const App = () => {

  // const APP_ID = '4frcyZz6YFdG1JTIZLYb';
  // const APP_KEY = '1zoH35JLKD98pgRiudMMgwa48EFzSjXs';

  // const [products, setProducts]= useState();
  // const exampleRequest = `https://simplescraper.io/api/${APP_ID}?apikey=${APP_KEY}&limit=100`;

  // //const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   getProducts();
  // }, []);
  // const getProducts = async () => {
  //   const response = await axios.get(exampleRequest);
  //   setProducts(response.data.data);
    
  //   const productData = [];
  //   const range = await response.data.data.to - response.data.data.from;
  //   for (let i = 0; i < range; i++) {
  //     productData.push({
  //       "img": response.data.hits[i].data.Image,
  //       "title": response.data.hits[i].data.Title
  //     });
  //   }
    
    
  // }
  // console.log(products)
  // //console.log(products.map(a => a.Price))
  


  return (
    <div className="App">
      <div className='products'>
        <Product />
      </div>
    </div>
  );
}

export default App;
