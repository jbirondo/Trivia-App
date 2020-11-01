import React from 'react';
import Question from "./Question"
import tandem from "./images/tandem.png"

class Splash extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            start: false
        }
    }

    startButton(){
        this.setState({
            start: true
        })
    }

    render(){
        if(this.state.start === false){
            return(
                <div className="splashContainer">
                    <h1 className="splashTitle">It Takes Two to Tandem</h1>
                    <h3 className="splashSubTitle">The singleplayer trivia game</h3>
                    <img 
                        src={tandem}
                        alt="">
                    </img>
                    <div
                        className="splashStartButton"
                        onClick={()=> this.startButton()}>
                            Click here to start
                    </div>
                </div>
            )
        }else{
            return(
                <Question/>
            )
        }
    }
}

export default Splash