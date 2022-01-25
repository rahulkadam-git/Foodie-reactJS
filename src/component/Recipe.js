import React from 'react'

export default function Recipe({title,mealType,img}) {
    
    return (
      
    <div className="card">
        <h2 className='card_title' >{title}</h2>
            <h3 className='recipe_type'>{mealType}</h3>
            <img className='card_img' src={img} alt="" />
            
        </div>
            
        
    )
}
