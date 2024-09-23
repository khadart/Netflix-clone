import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({img,slug}) => {
  
    
  return (
    <Link to={`/details/${slug}`}>
    <div>
    
    <img className='w-40 h-56 object-cover flex-grow rounded-md' src={img}/>
      </div></Link>
  
  )
}

export default MovieCard