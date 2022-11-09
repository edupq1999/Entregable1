import React from 'react'
import './styles/quotestyle.css'

const QuoteBox = ({randomData, randomColor}) => {

  return (
    <div style={{color: randomColor}} className='card'>
        <p className='card_phrase'>{randomData.quote}</p>
        <h1 className='card_autor'>{randomData.author}</h1>
    </div>
  )
}

export default QuoteBox