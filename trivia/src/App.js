import React from "react"
import Homepage from "./components/Homepage";
import Question from "./components/Question";
import { nanoid } from 'nanoid'
import './style.css'

function App() {
  const [isPlayingGame, setIsPlayingGame] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  const [numCorrect, setNumCorrect] = React.useState(0);
  const [check, setCheck] = React.useState(false);

  // React.useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=5&type=multiple")
  //     .then(res => res.json())
  //     .then(data => setQuestions(data.results))
  // }, [])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          .then(res => res.json())
          .then(data => setQuestions(generateQuestions(data.results)))
  }, [isPlayingGame])

  function startGame() {
    console.log(`starting a new game`);
    setIsPlayingGame(true)
  }

  function generateNewGame() {
    setIsPlayingGame(false);
    setNumCorrect(0);
    setCheck(false);
  }


  
  function generateQuestions(questionArray) {
    // let answers = new Array(questionArray.length); 
    let correctAnswers = []
    let questionItems;

    questionItems = questionArray.map((question, index) => {
        let choices = [question.correct_answer];
        correctAnswers.push(question.correct_answer);
        question.incorrect_answers.map(ans => choices.push(ans));
        const shuffledChoices = choices.sort((a, b) => 0.5 - Math.random());

        return {
                id: nanoid(),
                question: question.question, 
                choices: shuffledChoices, 
                correctAnswer: question.correct_answer, 
                // onSelectChoice: handleChoice,
                // check: check
                correctScore: 0
              }
    })
    return questionItems;
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

  // function holdChoice(id) {
  //   setChoices(oldChoices => oldChoices.map(choice => {
  //       return choice.id === id ? {...choice, isHeld: !choice.isHeld} : {...choice, isHeld: false}
  //   }))
  // }

  function holdChoice(id) {
    //TODO
  }

  // function checkAnswers() {
  //     answers.map((answer, index) => {
  //         if(correctAnswers[index] === answer) {
  //             setNumCorrect(numCorrect => numCorrect + 1);
  //         }
  //     })
  //     setCheck(true);
  // }

  return (
    <div className="App">
     <img className="img--bottom-left" src="blob 5.png" alt=""/>
     {/* <p>{questions[0] && questions[0].category}</p> */}


     {!isPlayingGame && <Homepage startGame={() => startGame()} />}
     {/* <Question questions={questions} /> */}
     {isPlayingGame && <Question startGame={() => startGame()} questions={questions} />}
     <img className="img--upper-right" src="blob 15.png" alt=""/>
    </div>
  );
}

export default App;
