import React from "react"
import { nanoid } from 'nanoid'
import {decode} from 'html-entities';

export default function QuestionItem(props) {
    
    function handleChoice() {
        console.log("clicked");
    }

    const choices = props.choices.map(choice => {
        return (
            <button 
                onClick={handleChoice} 
            >
                {decode(choice)}
            </button>
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