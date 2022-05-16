import React, {useState} from 'react';
import {formulaData} from '../src/data';
//import ProductDetails from 'ProductDetails';

const Product = (Title, Price, Rating, Reviews, Store, Link, Image) => {
    return (
        <>
        <div>
            <div className='product-container'>
                {formulaData.map((data, key) => {
                    return (
                        <div key={key} className="product-card">
                            <div className='product-title'>{data.Title}</div>
                            <div className='product-price'>{data.Price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Product;