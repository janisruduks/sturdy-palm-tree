import './show-products.style.css';

import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react';

type ShowProducts = {
  pageTitle: string
}

const ShowProducts: React.FC<ShowProducts> = ({ pageTitle }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [fetchError, setFetchError] = useState<null | string>(null);


  useEffect(() => {
    const fetchProducts = async () => {

      let { data, error } = await supabase
        .from('products')
        .select('*')


      if(error) {
        setFetchError(null);
        setProducts([]);
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