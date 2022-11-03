import React from "react"
// import { nanoid } from 'nanoid'

export default function Choice(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5": "#F5F7FB"
    }

    const checkStyles = {
        backgroundColor: props.isHeld ? handleCheckColors() : "#F5F7FB"
    }

    function handleCheckColors(){
        return props.isCorrect ? "green" : "red"
    }

    return (
        <button className="choice--btn" style={props.check ? checkStyles : styles} onClick={props.holdChoice}>
            {props.value}
        </button>
    )
}