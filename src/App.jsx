import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Button from './components/Button'
import data from './json/quotes.json'
import colors from './utils/color.js'

function App() {

  const getRandomIndex = arr => Math.floor(Math.random()*arr.length)
  const firstElement = data[getRandomIndex(data)]

  const [randomData, setRandomData] = useState(firstElement)
  const [randomColor, setRandomColor] = useState(colors())

  const nextInfo = () =>{
    setRandomColor(colors())
    setRandomData(data[getRandomIndex(data)])
  }

  return (
    <div style={{backgroundColor: randomColor}} className="App">
      <article className='container'>
        <QuoteBox 
          randomData={randomData}
          randomColor={randomColor}
        />
        <Button
          randomColor={randomColor}
          nextInfo={nextInfo}
        />
      </article>
    </div>
  )
}

export default App
