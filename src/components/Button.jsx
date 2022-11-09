import React from 'react'
import './styles/button.css'

const Button = ({randomColor, nextInfo}) => {

  return (
    
        <button
            style={{backgroundColor: randomColor}}
            className='card_button'
            onClick={nextInfo}
        >Next autor</button>
    
  )
}

export default Button