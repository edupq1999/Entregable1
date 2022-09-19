import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
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
      <QuoteBox 
        randomData={randomData}
        randomColor={visualColor}
        nextInfo={nextInfo}
      />
    </div>
  )
}

export default App
