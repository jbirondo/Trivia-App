import data from "../Apprentice_TandemFor400_Data.json"
import React from 'react';
import './Question.css'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.index =  0
        this.array = this.shuffle(data).slice(0,10)
        this.data = this.array[this.index]
        this.state  = {
            score: 0,
            question: this.data.question,
            incorrect: this.data.incorrect,
            correct: this.data.correct
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

    onAnswerLIClick(e){
        e.preventDefault()
        if(e.currentTarget.innerText !== this.state.correct){
            e.currentTarget.classList.add("wrong")
        }else{
            e.currentTarget.classList.add("correct")
        }
        let nl = e.currentTarget.parentElement.querySelectorAll("li")
        nl.forEach(node => {
            if(node.innerText === this.state.correct){
                node.classList.add("correct")
            }
        })
        let answer = e.currentTarget.innerText
        setTimeout(() => {
            this.index ++
            if(answer === this.data.correct && this.moreQuestions()){
                this.data = data[this.index]
                this.setState({
                    score: this.state.score += 1,
                    question: this.data.question,
                    incorrect: this.data.incorrect,
                    correct: this.data.correct
                })
            }else if(answer === this.data.correct && !this.moreQuestions()){
                this.setState({
                    score: this.state.score += 1
                })
            }else if(answer !== this.data.correct && this.moreQuestions()){
                this.data = data[this.index]
                this.setState({
                    question: this.data.question,
                    incorrect: this.data.incorrect,
                    correct: this.data.correct
                })
            }else if(answer !== this.data.correct && !this.moreQuestions()){
                this.setState({
                    score: this.state.score
                })
            }
        }, 2000);
    }

    moreQuestions(){
        return this.index < this.array.length 
    }

    resetButton(){
        this.index = 0
        this.array = this.shuffle(data).slice(0,10)
        this.data = data[this.index]
        const highscore = localStorage.getItem("highscore");
        if(highscore !== null){
            if (this.state.score > highscore) {
                localStorage.setItem("highscore", this.state.score);      
            }
        }
        else{
            localStorage.setItem("highscore", this.state.score);
        }
        this.setState({
            score: 0,
            question: this.data.question,
            incorrect: this.data.incorrect,
            correct: this.data.correct
        })
    }

    render(){
        if(this.moreQuestions()){
            return(
                <div>
                    <div className="questionContainer">
                        <div className="questionQuestion">Question {this.index + 1}: {this.state.question} </div>
                        <ul className="questionPotentialAnswersUL">
                            {this.shuffle([...new Set(this.combine(this.state.incorrect, this.state.correct))]).map(answer=> {
                                return  <li className="questionAnswerLI"
                                key={answer}
                                onClick={(e) => (this.onAnswerLIClick(e))}>
                                                <span>{answer}</span>
                                        </li>
                            })}
                        </ul>
                    </div>
                    <div className="questionScore">Score: {this.state.score}</div>
                    <div className="questionHighScore">High Score: {localStorage.getItem("highscore")}</div>
                </div>
            )
        }else{
            return(
                <div className="gameOverContainer">
                    <div className="gameOverMessage">Game over! Your final score was {this.state.score}</div>
                    <div className="gameOverReset"onClick={() => (this.resetButton())}>
                        <span>Try again?</span>
                    </div>
                    <div className="questionScore">Score: {this.state.score}</div>
                    <div className="questionHighScore">High Score: {localStorage.getItem("highscore")}</div>
                </div>
            )
        }
    }
}

export default Question