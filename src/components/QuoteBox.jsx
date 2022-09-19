import React from 'react'
import './quotestyle.css'

const QuoteBox = ({randomData, randomColor}) => {
    
    const visualColor = randomColor

  return (
    <div style={{color: visualColor}} className='card'>
        <p className='card_phrase'>{randomData.quote}</p>
        <h1 className='card_autor'>{randomData.author}</h1>
    </div>
  )
}

export default QuoteBox