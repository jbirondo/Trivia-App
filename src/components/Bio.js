import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons'
import profile from "./images/profile.jpg"
import "./Bio.css"

class Bio extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
          return (
            <Menu right>
                <img className="profilePic" src={profile} alt=""></img>
                <h3>Eugene Birondo</h3>
                    <p>
                        Software Developer
                    </p>
                    <p>
                        San Francisco Bay Area 
                    </p> 
                    <p> 
                        Ruby, Ruby on Rails, JavaScript, Python, React, Redux, Node.js, Docker, GraphQL, Linux, Unix
                    </p>
                <div className="contactInfo">
                        <a href="https://www.linkedin.com/in/eugene-birondo-702637192/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                        <a href="https://github.com/jbirondo" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href="https://angel.co/u/eugene-birondo" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faAngellist}/>
                        </a>
                </div>

            </Menu>
        );
    }
}


export default Bio