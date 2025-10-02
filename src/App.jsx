import { useState } from 'react'
import './App.css'
import question from './components/Question'
import answer from './components/Answers'
function App() {
  const [count, setCount] = useState(0)
  const plusCount = () => {
    if (count < question.length - 1) {
      setCount(count + 1)
    }
  }
  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }
  return (
    <div className="App">
      <h1>Baldurs Gate 3 lore review</h1>
      <h3>Test your knowledge of Baldur’s Gate 3 with this trivia quiz!</h3>
      <h3>Questions amount: {question.length}</h3>
      <div className="info-box" onClick = {handleFlip}>
        <div className={`question-answer ${isFlipped ? "flipped" : ""}`}>
          <div className ="question">
            <h2 >Question: {question[count]}</h2>
          </div>
          <div className ="answer">
            <h2>Answer: {answer[count]}</h2>
          </div>
          
          
        </div>
      </div>
      <div className='buttons'>
        <div className="backward" onClick={minusCount}>
          <h2>Back</h2>
        </div>
        <div className="forward" onClick={plusCount}>
          <h2>Next</h2>
        </div>
      </div>
    </div>
        
  )
}

export default App
