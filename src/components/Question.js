import data from "../Apprentice_TandemFor400_Data.json"
import React from 'react';
import './Question.css'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.index =  0
        this.data = data[this.index] || undefined
        this.state  = {
            score: 0,
            question: this.data.question || undefined,
            incorrect: this.data.incorrect || undefined,
            correct: this.data.correct || undefined
        }
    }

    combine(arr, str){
        arr.push(str)
        return arr
    }

    shuffle(arr){
        for(let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        return arr
    }

    onAnswerLIClick(answer){
        this.index ++
        if(answer === this.data.correct && this.moreQuestions()){
            this.data = data[this.index]
            this.setState({
                score: this.state.score += 1,
                question: this.data.question,
                incorrect: this.data.incorrect,
                correct: this.data.correct
            })
        }
        if(answer === this.data.correct && !this.moreQuestions()){
            this.setState({
                score: this.state.score += 1
            })
        }
    }

    moreQuestions(){
        return this.index < data.length 
    }

    resetButton(){
        this.index = 0
        this.data = data[this.index]
        this.setState({
            score: 0,
            question: this.data.question || undefined,
            incorrect: this.data.incorrect || undefined,
            correct: this.data.correct || undefined
        })
    }

    render(){
        let question = this.state.question
        let answers = this.combine(this.state.incorrect, this.state.correct)
        let shuffledAnswers = this.shuffle(answers)
        let correctAnswer = this.state.correct
        console.log(answers, shuffledAnswers)
        if(this.moreQuestions()){
            return(
                <div className="questionContainer">
                    <div className="questionQuestion">Question : {question} </div>
                    <ul className="questionPotentialAnswersUL">Potential Answers:
                        {shuffledAnswers.map(answer=> {
                            return <li  className="questionAnswerLI"
                                        key={answer}
                                        onClick={() => (this.onAnswerLIClick(answer)) }
                                        >{answer}</li>
                        })}
                    </ul>
                    <div className="questionCorrect">Correct: {correctAnswer}</div>
                    <div className="questionScore">Score: {this.state.score}</div>
                </div>
            )
        }else{
            return(
                <div className="gameOverContainer">
                    <div>Game Over!</div>
                    <div onClick={() => (this.resetButton())}>Try again?</div>
                </div>
            )
        }
    }
}

export default Question