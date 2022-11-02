import React from "react"
import Choice from "./Choice";
import {decode} from 'html-entities';
import { nanoid } from 'nanoid'

export default function QuestionItem(props) {
    const choiceArr = props.choices.map(choice => {
        return {
            value: decode(choice),
            isHeld: false,
            id: nanoid()
        };
    })
    const [choices, setChoices] = React.useState(choiceArr);

    function holdChoice(id) {
        setChoices(oldChoices => oldChoices.map(choice => {
            return choice.id === id ? {...choice, isHeld: !choice.isHeld} : {...choice, isHeld: false}
        }))
    }

    const choiceButtons = choices.map(choice => (
        <Choice key={choice.id} value={choice.value} isHeld={choice.isHeld} holdChoice={() => holdChoice(choice.id)} />
    ));

    return (
        <div className="question--item">
            <p>{decode(props.question)}</p>
            <div className="choice-container">{choiceButtons}</div>
            <hr />
        </div>
    )
}