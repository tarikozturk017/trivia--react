import React from "react"
import QuestionItem from "./QuestionItem"

export default function Question(props) {
    
    let questionItems;
    if(props.length !== 0) { 
        let answers = new Array(props.length); 
        let correctAnswers = []
        questionItems = props.questions.map((question, index) => {
            let choices = [question.correct_answer];
            correctAnswers.push(question.correct_answer);
            question.incorrect_answers.map(ans => choices.push(ans));
            const shuffledChoices = choices.sort((a, b) => 0.5 - Math.random());



            function handleChoice(answer){
                answers[index] = answer;
                console.log(answers);

                console.log(correctAnswers);
            }


            return (
                <QuestionItem 
                    question={question.question} 
                    choices={shuffledChoices} 
                    correctAnswer={question.correct_answer} 
                    onSelectChoice={handleChoice}
                />
            )
        })
    }
    
    return (
        <div className="container">
            {questionItems}
            <button className="btn-primary">Check answers</button>
        </div>
    )
}