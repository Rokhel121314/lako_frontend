
import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../css/style.module.css';
import { useParams } from 'react-router-dom'
import  Axios  from 'axios';
import { UpdateProduct } from '../component/UpdateProduct';
import { DeleteProduct } from '../component/DeleteProduct';





export function ProductDetail() {

    const {id} = useParams();
    const productId = parseInt(id);
    const [productData , setProductData] = useState([]);
    // console.log(id)

    useEffect(()=> {
        Axios.get(`http://localhost:3001/stocks/show/${productId}`).then((response)=>{
          setProductData(response.data)
        })
      });
      

  return (
    
    <div>
      <main className={styles.perProductDisplayMain}>
        <section className={styles.perProductDisplaySection}>
          {productData.map(product =>
            <>
            <div className={styles.displayImage}>
              <img src={require('../img/' + product.productImage)} alt='img' className={styles.perProductImage}/>
            </div>
            <div className={styles.displayDetail}>
              <div className={styles.displayItem}>
                <p className={styles.displayTag}>Product Name</p>
                <p className={styles.displayValue}>: {product.productName}</p>
              </div>
              <div className={styles.displayItem}>
                <p className={styles.displayTag}>Stocks Available</p>
                <p className={styles.displayValue}>: {product.productQty.toFixed(2)} pcs </p>
              </div>
              <div className={styles.displayItem}>
                <p className={styles.displayTag}>Original Price</p>
                <p className={styles.displayValue}>: &#8369; {product.originalPrice.toFixed(2)}</p>
              </div>
              <div className={styles.displayItem}>
                <p className={styles.displayTag}>Resell Price</p>
                <p className={styles.displayValue}>: &#8369; {product.resellPrice.toFixed(2)}</p>
              </div>
              <div className={styles.displayItem}>
                <p className={styles.displayTag}>Product Category</p>
                <p className={styles.displayValue}>: {product.productCategory}</p>
              </div>
              <div className={styles.btnContainer}> 
                <div className='col-6'>
                  <UpdateProduct
                  productName={product.productName}
                    productQty = {product.productQty}
                    originalPrice = {product.originalPrice}
                    resellPrice={product.resellPrice}
                    productCategory={product.productCategory}
                    productImage = {product.productImage}
                    id= {product.id}/>
                </div>
                <div className='col-6 text-start'>
                  <DeleteProduct id={product.id} productName = {product.productName}/>
                </div>
             
             
              </div>

            </div>
            </>

            
            )}
        </section>
      </main>
{/* 
        {productData.map(props =>
        <>
        <div className='d-flex'>
        <div className='col-6'>
             <img src={require('../img/' + props.productImage)} alt='img' height={500} widht={500}/>
        </div>
        <div className='col-6'>
        <h1>{productId}</h1>
                <h1>{props.productName}</h1>
                <h1>{props.productQty}</h1>
                <h1>{props.originalPrice}</h1>
                <h1>{props.resellPrice}</h1>
                <h1>{props.productCategory}</h1>
                <h1>{props.productImage}</h1>
                <h1>{props.id}</h1>
                
                <UpdateProduct
                 productName={props.productName}
                  productQty = {props.productQty}
                  originalPrice = {props.originalPrice}
                  resellPrice={props.resellPrice}
                  productCategory={props.productCategory}
                  productImage = {props.productImage}
                  id= {props.id}/>
                  <DeleteProduct id={props.id} productName = {props.productName}/>
                  
                  
                
        </div>
        </div>
        
        </>
)} */}

    </div>
  )
}


