import React from "react"
import Choice from "./Choice";
import {decode} from 'html-entities';

export default function QuestionItem(props) {
    let choiceButtons = props.choices.map((choice) => (
        <Choice 
            key={choice.id} 
            value={(choice.value)}  
            choice={choice}
            questions={props.questions}
            setQuestions={props.setQuestions}
            questionId={props.questionId}

            holdChoice={props.holdChoice} 
            numCorrect={props.numCorrect}
            setNumCorrect={props.setNumCorrect}
        />
    ))

    return (
        <div className="question--item">
            <p>{decode(props.question)}</p>
            <div className="choice-container">{choiceButtons}</div>
            <hr />
        </div>
    )
}