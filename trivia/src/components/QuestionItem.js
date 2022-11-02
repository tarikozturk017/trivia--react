import React from "react"
import {decode} from 'html-entities';

export default function QuestionItem(props) {
    // const decodedQuestion = decode(props.question)
    const choices = props.choices.map(choice => {
        return (
            <button>{decode(choice)}</button>
        )
    })
    return (
        <div className="question--item">
            <p>{decode(props.question)}</p>
            <div className="choice-container">{choices}</div>
            <hr />
        </div>
    )
}