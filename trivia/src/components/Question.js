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
                <QuestionItem question={question.question} choices={choices}/>
            )
        })
    }
    
    return (
        <div className="container">
            {questionItems}
            {/* <QuestionItem question='Hello how are you?' choices={arr}/>
            <div className="question--item">
                <p>How would one say goodbye in Spanish?</p>
                <div className="choice-container">
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                    <button>D</button>
                </div>
                <hr />
            </div>
            <div className="question--item">
                <p>How would one say goodbye in Spanish?</p>
                <div className="choice-container">
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                    <button>D</button>
                </div>
                <hr />
            </div>
            <div className="question--item">
                <p>How would one say goodbye in Spanish?</p>
                <div className="choice-container">
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                    <button>D</button>
                </div>
                <hr />
            </div>
            <div className="question--item">
                <p>How would one say goodbye in Spanish?</p>
                <div className="choice-container">
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                    <button>D</button>
                </div>
                <hr />
            </div> */}
            <button className="btn-primary">Check answers</button>
        </div>
    )
}