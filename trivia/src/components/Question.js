import React from "react"
import QuestionItem from "./QuestionItem"

export default function Question(props) {
    let questionItems;
    if(props.length !== 0) { 
        questionItems = props.questions.map(question => {
            let choices = [question.correct_answer];
            question.incorrect_answers.map(ans => choices.push(ans));
            const shuffledChoices = choices.sort((a, b) => 0.5 - Math.random());

            return (
                <QuestionItem 
                    question={question.question} 
                    choices={shuffledChoices} 
                    correctAnswer={question.correct_answer} 
                />
            )
        })
    }
    
    return (
        <div className="container">
            {questionItems}
            <button className="btn-primary">Check answers</button>
        </div>
    )
}