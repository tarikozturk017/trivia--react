import React from "react"

export default function Choice(props) {
    const styles = {
        backgroundColor: props.color
    }

    return (
        <button 
            className="choice--btn" 
            style={styles}
            onClick={props.holdChoice}>
            {props.value}
        </button>
    )
}