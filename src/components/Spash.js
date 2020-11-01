import React from 'react';
import Question from "./Question"

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
                <div onClick={()=> this.startButton()}>Click here to start</div>
            )
        }else{
            return(
                <Question/>
            )
        }
    }
}

export default Splash