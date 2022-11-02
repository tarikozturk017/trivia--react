import React from "react"
// import { nanoid } from 'nanoid'

export default function Choice(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5": "#F5F7FB"
    }
    return (
        <button className="choice--btn" style={styles} onClick={props.holdChoice}>
            {props.value}
        </button>
    )
}