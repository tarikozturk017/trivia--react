import React from "react"
import QuestionItem from "./QuestionItem"

export default function Question(props) {
    const [numCorrect, setNumCorrect] = React.useState(0);
    const [check, setCheck] = React.useState(false);
    let answers = new Array(props.length); 
    let correctAnswers = []
    
    let questionItems;
    if(props.length !== 0) { 
        questionItems = props.questions.map((question, index) => {
            let choices = [question.correct_answer];
            correctAnswers.push(question.correct_answer);
            question.incorrect_answers.map(ans => choices.push(ans));
            const shuffledChoices = choices.sort((a, b) => 0.5 - Math.random());



            function handleChoice(answer){
                answers[index] = answer;
                // console.log(answers);

                // console.log(correctAnswers);
            }


            return (
                <QuestionItem 
                    question={question.question} 
                    choices={shuffledChoices} 
                    correctAnswer={question.correct_answer} 
                    onSelectChoice={handleChoice}
                    check={check}
                />
            )
        })
    }

    function checkAnswers() {
        answers.map((answer, index) => {
            if(correctAnswers[index] === answer) {
                console.log(answer);
                setNumCorrect(numCorrect + 1);
            }
        })

        // console.log(answers);

        console.log(correctAnswers);
        setCheck(true);
    }

    
    return (
        <div className="container">
            {questionItems}
            { !check && <button className="btn-primary" onClick={checkAnswers}>Check answers</button>}
            { check && 
            <div> 
                <p>You scored {numCorrect}/5 correct answers</p>
                <button className="btn-primary" onClick={checkAnswers}>Play again</button> 
            </div>}
        </div>
    )
}