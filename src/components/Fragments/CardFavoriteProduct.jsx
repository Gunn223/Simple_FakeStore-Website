import React from 'react'
import { Link } from 'react-router-dom'

const CardFavoriteProduct = ({ image, title, price,id }) => {
    
  return (
    <Link to={`/detailproduct/${id}`}>
    <div className="bg-cover bg-center h-[250px] w-[200px] group">
        <img src={image} alt={title} className=' w-full h-full group-hover:scale-110 transition-all duration-300'/>
        <div className='mt-5'>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-red-800 font-semibold">${price}</p>
        </div>
    </div>
    </Link>
  )
}

export default CardFavoriteProduct
