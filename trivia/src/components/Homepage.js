import React from "react"

export default function Homepage(props) {
    return (
        <div className="homepage">
            <h2>Quizzical</h2>
            <p>Some description if needed</p>
            <button className="btn-primary" onClick={props.startGame}>Start quiz</button>
        </div>
    )
}