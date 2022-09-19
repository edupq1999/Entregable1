import React from 'react'
import './quotestyle.css'

const Button = ({randomColor, nextInfo}) => {

  return (
    
        <button
            style={{backgroundColor: randomColor}}
            className='card_button'
            onClick={nextInfo}
        >&#62;</button>
    
  )
}

export default Button