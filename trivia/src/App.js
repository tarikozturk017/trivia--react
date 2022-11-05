import React from "react"
import Homepage from "./components/Homepage";
import Question from "./components/Question";
import { nanoid } from 'nanoid'
import './style.css'

function App() {
  const [isPlayingGame, setIsPlayingGame] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [isLoaded ,setIsLoaded] = React.useState(false);
  const [numCorrect, setNumCorrect] = React.useState(0);
  const [check, setCheck] = React.useState(false);

  React.useEffect(() => {
    console.log("use effect")
    if(isPlayingGame){
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          // .then(setIsLoaded(true))
          .then(res => res.json())
          .then(data => setQuestions(generateQuestions(data.results)))
          .then(console.log("new data fetched"))
          .then(setIsLoaded(true))
        }
  }, [isPlayingGame])

  function generateNewGame() {
    setIsLoaded(false);
    console.log("reseting old game")
    setIsPlayingGame(false);
    setNumCorrect(0);
    setCheck(false);
    React.setTimeout(() => startGame(), 0);
  }

  function generateQuestions(questionArray) {
    
    let questionItems = questionArray.map((question) => {
        return {
                id: nanoid(),
                question: question.question, 
                choices: shuffleChoices([...question.incorrect_answers, question.correct_answer]), 
                correctAnswer: question.correct_answer, 
                numCorrect: 0
              }
    })
    return questionItems;
  }

  function shuffleChoices(choicesArray) {
    let randomArr = [...choicesArray].sort(() => Math.random() - 0.5);
    let randomChoices = randomArr.map((item) => {
      return {
        value: item,
        id: nanoid(5),
        isHeld: false,
      };
    });
    return randomChoices;
  }

  function checkQuestionAnswers() {
    setNumCorrect(0);
    setQuestions(prevQuestions => prevQuestions.map((question) => {
      let checkedChoices = question.choices.map((choice) => {
        if(choice.isHeld && question.correctAnswer === choice.value){
          setNumCorrect((prevNum) => prevNum + 1);
          return {
            ...choice,
            isCheckedCorrect: true
          };
        } else if (choice.isHeld && question.correctAnswer !== choice.value) {
          return {
            ...choice,
            isCheckedWrong: true
          }
        } else if (!choice.isHeld && question.correctAnswer === choice.value) {
          return {
            ...choice,
            isCheckedCorrect: true,
          };
        } else {
          return {
            ...choice,
            isFaded: true
          };
        }

      });
      return {
        ...question,
        choices: checkedChoices
      };
    }))
    setCheck(true);
  }

  function holdChoice(choiceId, questionId) {
    setQuestions((prevQuestions) => prevQuestions.map((question) => {
      if(question.id === questionId) {
        let newChoicesArray = question.choices.map((choice) => {
          if(choice.id === choiceId) {
            return {
              ...choice,
              isHeld: true
            }
          } else {
            return {
              ...choice,
              isHeld: false
            }
          }
        })
        return {
          ...question,
          choices: newChoicesArray
        }
      } else {
        return question;
      }
    })
    );
  }

  function startGame() {
    console.log(`starting a new game in 1 sec`);
    setNumCorrect(0);
    setCheck(false);
    setIsPlayingGame(true)

  }

  return (
    <div className="App">
     <img className="img--bottom-left" src="blob 5.png" alt=""/>

     {isPlayingGame? (
        <Question
          questions={questions}
          setQuestions={setQuestions}
          key={nanoid()}
          check={check}
          setCheck={setCheck}
          holdChoice={holdChoice}
          checkQuestionAnswers={checkQuestionAnswers}
          numCorrect={numCorrect}
          setNumCorrect={setNumCorrect}
          generateNewGame={generateNewGame}
        />
      )
      : (
        <Homepage startGame={startGame} />
      )}

     <img className="img--upper-right" src="blob 15.png" alt=""/>
    </div>
  );
}

export default App;
