import { useState } from 'react'
import './App.css'
import question from './components/Question'
import answer from './components/Answers'
import guess from './components/Guess'
function App() {
  const [count, setCount] = useState(0)
  const [Guess, setGuess] = useState("")
  const [questionList, setQuestionList] = useState(question)
  const [answerList, setAnswerList] = useState(answer)
  const [guessList, setGuessList] = useState(guess)
  const [streak, setStreak] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hiddenPrev, setHiddenPrev] = useState(true);
  const [hiddenNext, setHiddenNext] = useState(false);
  
  const hiddenButton = ()=>{
    if (count <= 1) {
      setHiddenPrev(true);
    } else {
      setHiddenPrev(false);
    }
    if (count >= (question.length - 1)) {
      setHiddenNext(true);
    } else {
      setHiddenNext(false);
    }
  }
  const minusCount = () => {
    
    if (count > 0) {
      setCount(count - 1)
    }
    hiddenButton();
    
  }
  const plusCount = () => {
    hiddenButton();
    if (count < question.length - 1) {
      setCount(count + 1)
    }
    hiddenButton();
  }
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const checkingAnswer = () => {
    if (guessList[count].map(g => g.toLowerCase()).includes(Guess.toLowerCase())) {
      setStreak(streak + 1);
    alert("Correct!");
  } else {
    setStreak(0);
    alert("Wrong!");
    }
  }
  function shuffleArray(array) {
  const newArray = [...array]; // copy so we don’t mutate original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
    return newArray;
  }
  function finalShuffle(){
    setQuestionList(shuffleArray(questionList));
    setGuessList(shuffleArray(guessList));
    setAnswerList(shuffleArray(answerList));
    
  }
  
  return (
    <div className="App">
      <h1>Baldurs Gate 3 lore review</h1>
      <h3>Test your knowledge of Baldur’s Gate 3 with this trivia quiz!</h3>
      <h3>Questions amount: {question.length}</h3>
      <h3>Current Streak: {streak}</h3>
      <div className="info-box" onClick = {handleFlip}>
        <div className={`question-answer ${isFlipped ? "flipped" : ""}`}>
          <div className ="question">
            <h2 >Question: {questionList[count]}</h2>
          </div>
          <div className ="answer">
            <h2>Answer: {answerList[count]}</h2>
          </div>
        </div>
      </div>
      <div className = "guessing">
        <p>answer the question </p>
        <input type="text" placeholder="your answer here" onChange={(e) => setGuess(e.target.value)}></input>
        <button type ="submit" className = "submit-button" onClick={checkingAnswer}>Submit</button>
      </div>
      <div className='buttons'>
        <div className={`backward ${hiddenPrev ? "hidden" : ""}`} onClick={minusCount}>
          <h2>Back</h2>
        </div>
        <div className={`forward ${hiddenNext ? "hidden" : ""}`} onClick={plusCount}>
          <h2>Next</h2>
        </div>
        <button className = "shuffle" onClick={finalShuffle}>Shuffle</button>
      </div>
    </div>
        
  )
}

export default App
