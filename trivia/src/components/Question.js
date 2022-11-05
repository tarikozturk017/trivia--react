import React from "react"
import QuestionItem from "./QuestionItem"

export default function Question(props) {
    let displayQuestions = props.questions.map((question) => (
        
        <QuestionItem 
                key={question.id}
                questionId={question.id}
                question={question.question} 
                choices={question.choices} 
                correctAnswer={question.correctAnswer} 
                questions={props.questions}
                setQuestions={props.setQuestions}
                holdChoice={props.holdChoice}
                numCorrect={props.numCorrect}
                setNumCorrect={props.setNumCorrect}
            />
    ));
    
    return (
        <div className="container">
            {displayQuestions}
            {!props.check ? (
                <button
                className="btn-primary"
                onClick={() => props.checkQuestionAnswers()}
                >
                Check Answers
                </button>
            ) : (
                <div>
                <p> You scored {props.numCorrect}/5 correct answers</p>
                <button
                    className="btn-primary"
                    onClick={() => props.generateNewGame()}
                >
                    Play Again
                </button>
                </div>
            )}

        </div>
    )
}