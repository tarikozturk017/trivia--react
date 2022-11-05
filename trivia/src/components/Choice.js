import React from "react"
import {decode} from 'html-entities';

export default function Choice(props) {

    function choiceStyles(item) {
        let myStyle = {};
    
        if (item.isCheckedWrong) {
          myStyle = {
            backgroundColor: "#F8BCBC",
            border: "none",
            opacity: 0.5,
          };
          return myStyle;
        } else if (item.isCheckedCorrect) {
          myStyle = {
            backgroundColor: "#94D7A2",
            border: "none",
          };
          return myStyle;
        } else if (item.isFaded) {
          myStyle = {
            opacity: 0.5,
          };
          return myStyle;
        } else {
          myStyle = {
            backgroundColor: item.isHeld ? "#D6DBF5" : "#f5f7fb",
          };
          return myStyle;
        }
    }
    return (
        <button 
            id={props.choice.id}
            isHeld={props.choice.isHeld}
            value={props.value}
            className="choice--btn" 
            style={choiceStyles(props.choice)}
            onClick={() => props.holdChoice(props.choice.id, props.questionId)}
        >
           {decode(props.value)}
        </button>
    )
}