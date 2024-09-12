import React from 'react'
import styles from './Products.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSupabase } from '../../Providers/SupabaseProvider'

export const Products = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState([]);
   

    const getProductData = async () => {
        if(supabase){
            const { data, error } = await supabase
                .from('products')
                .select('id, name, description, price, image, stock')

            if(error){
                console.error(error);
            }else{
                setData(data)
                console.log(data)
            }
        }
    };

    useEffect(() => {
        getProductData();
    },[supabase]);

    return (
        <section className={styles.ProductsMain}>
         <h2>Our picks for you</h2>
         <div className={styles.Products}>  {/* Apply grid to this container */}
           {data && data.map((item) => {
             return (
                 <div key={item.id} className={styles.ProductCard}>
                     <h2>{item.name}</h2>
                     <div className={styles.ProductImg}>
                         <img src={item.image} alt="ProductImg" />
                     </div>
                     <p>{item.description}</p>
                     <p>Price: {item.price}</p>
                     <Link to=''><button>Add to cart</button></Link>
                 </div>
             );
           })}
         </div>
        </section>
     );
 }
