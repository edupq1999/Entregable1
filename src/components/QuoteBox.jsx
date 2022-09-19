import React from 'react'
import './quotestyle.css'

const QuoteBox = ({randomData, randomColor, nextInfo}) => {
    
    const visualColor = randomColor

  return (
    <article style={{color: visualColor}} className='card'>
        <p className='card_phrase'>{randomData.quote}</p>
        <h1 className='card_autor'>{randomData.author}</h1>
        <Button 
            randomColor={visualColor}
            nextInfo={nextInfo}
        />
    </article>
  )
}

export default QuoteBox