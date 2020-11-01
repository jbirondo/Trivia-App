import data from "../Apprentice_TandemFor400_Data.json"
import React from 'react';
import button from "./sounds/button.wav"
import correct from "./sounds/correct.mp3"
import wrong from "./sounds/wrong.mp3"
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
            correct: this.data.correct,
        }
    }

    componentDidMount() {
        if(localStorage.getItem("highscore") === null){
            localStorage.setItem("highscore", 0);
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
        const nl = e.currentTarget.parentElement.querySelectorAll("li")
        nl.forEach(node => {
            if(node.innerText === this.state.correct){
                node.classList.add("correct")
            }else{
                node.classList.add("wrong")
            }
        })
        const plusOne = document.getElementsByClassName("lastChild")[0].lastChild
        let click
        if(e.currentTarget.innerText === this.state.correct){
            plusOne.classList.add("flash")
            click = new Audio(correct)
            click.play()
        }else{
            click = new Audio(wrong)
            click.play()
        }
        const highscore = localStorage.getItem("highscore");
        const answer = e.currentTarget.innerText
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
                if (this.state.score > highscore) {
                    localStorage.setItem("highscore", this.state.score);   
                }
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
                if (this.state.score > highscore) {
                    localStorage.setItem("highscore", this.state.score);      
                }
            }
            plusOne.classList.remove("flash")
        }, 1500);
    }

    moreQuestions(){
        return this.index < this.array.length 
    }

    resetButton(){
        this.index = 0
        this.array = this.shuffle(data).slice(0,10)
        this.data = data[this.index]
        this.setState({
            score: 0,
            question: this.data.question,
            incorrect: this.data.incorrect,
            correct: this.data.correct
        })
        const reset = new Audio(button)
        reset.play()
    }

    render(){
        if(this.moreQuestions()){
            return(
                <div className="lastChild">
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
                    <div className="plueOne">+1</div>
                </div>
            )
        }else{
            return(
                <div className="gameOverContainer">
                    <div className="gameOverMessage">Game over! Your final score was {this.state.score}</div>
                    <div className="gameOverReset"onClick={() => (this.resetButton())}>
                        <span>Play again?</span>
                    </div>
                    <div className="questionScore">Score: {this.state.score}</div>
                    <div className="questionHighScore">High Score: {localStorage.getItem("highscore")}</div>
                </div>
            )
        }
    }
}

export default Question