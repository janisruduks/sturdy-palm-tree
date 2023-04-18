import './showProducts.style.css';

import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react';

const ShowProducts = ({ pageTitle }) => {
  const [fetchError, setFetchError] = useState(null)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {

      let { data, error } = await supabase
        .from('products')
        .select('*')


      if(error) {
        setFetchError("Sorry could not fetch products");
        setProducts(null);
      }
      if(data){
        setProducts(data);
        setFetchError(null);
      }
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <h1 className='title-menu'>{pageTitle}</h1>
      <hr></hr>
      <div className='show-products'>
          {fetchError && (<p>{fetchError}</p>)}
          {products && (
          <div className='products'>
              {products.map(product => (
              <div>
                  <p className='text-small' id={product.id} >{product.title} ${product.price}</p>
                  <p>{product.description}</p>
              </div>
              ))}
          </div>
          )}
      </div>
    </div>
  )
}

export default ShowProducts;