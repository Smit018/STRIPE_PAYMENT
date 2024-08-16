import React from 'react';

const ProductCard=({product,addToCart})=>{


    return(
     <div className='bg-white shadow-lg rounded-lg p-4 m-2'>
      <img src={require(`../assets/images/${product.id}.jpeg`)} alt={product.name} className='w-full h-48 object-cover rounded-t-lg'/>
       <div className='mt-4'>
         <h2 className='text-lg font-bold'>{product.name}</h2>
         <p className='text-gray-600'>${product.price}</p>
         <button
           className='bg-blue-500 text-white px-4 py-2 mt-4 rounded'
           onClick={() => addToCart(product)}
         >
           Add to Cart  
         </button>
       </div>
     </div>
    )
};

export default ProductCard;


