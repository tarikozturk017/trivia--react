import React from "react"
import Choice from "./Choice";
import {decode} from 'html-entities';
import { nanoid } from 'nanoid'

export default function QuestionItem(props) {
    const choiceArr = props.choices.map(choice => {
        let isCorrect = decode(choice) === props.correctAnswer
        return {
            value: decode(choice),
            isHeld: false,
            id: nanoid(),
            isCorrect: isCorrect
        };
    })
    const [choices, setChoices] = React.useState(choiceArr);

    function holdChoice(id) {
        setChoices(oldChoices => oldChoices.map(choice => {
            return choice.id === id ? {...choice, isHeld: !choice.isHeld} : {...choice, isHeld: false}
        }))
    }

    React.useEffect(() => {
        choices.map(choice => {
            if (choice.isHeld) {
                props.onSelectChoice(choice.value)
            }
        })
    }, [choices])

    function handleColor(id) {
        let color;
        choices.map(choice => {
            if (choice.id === id) {
                if (props.check){
                    if(choice.isHeld && !choice.isCorrect) color = "red"
                    else if (choice.isCorrect) color = "green";
                }else {
                    color = choice.isHeld ? "#D6DBF5" : "#F5F7FB";
                }
            }
        })
        return color;
    }

    const choiceButtons = choices.map(choice => (
        <Choice key={choice.id} 
            value={choice.value}  
            holdChoice={() => holdChoice(choice.id)} 
            color={handleColor(choice.id)}
        />
    ));

    return (
        <div className="question--item">
            <p>{decode(props.question)}</p>
            <div className="choice-container">{choiceButtons}</div>
            <hr />
        </div>
    )
}