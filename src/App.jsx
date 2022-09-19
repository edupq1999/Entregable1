import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Button from './components/Button'
import data from './json/quotes.json'
import colors from './utils/color.js'

function App() {
  let visualColor = colors()

  const getRandomIndex = arr => Math.floor(Math.random()*arr.length)
  const firstElement = data[getRandomIndex(data)]

  const [randomData, setRandomData] = useState(firstElement)
  const [randomColor, setRandomColor] = useState(visualColor)

  const nextInfo = () =>{
    visualColor = colors()
    setRandomColor(visualColor)
    setRandomData(data[getRandomIndex(data)])
  }

  return (
    <div style={{backgroundColor: visualColor}} className="App">
      <article className='container'>
        <QuoteBox 
          randomData={randomData}
          randomColor={visualColor}
          nextInfo={nextInfo}
        />
        <Button
          randomColor={visualColor}
          nextInfo={nextInfo}
        />
      </article>
    </div>
  )
}

export default App
