import React from "react";
import { stack as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons'
import "./Bio.css"

class Bio extends React.Component {
    showSettings (event) {
        event.preventDefault();
  }

    render () {
          return (
            <Menu right>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQE1q7mCXD5Ksw/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=SsLOR6HGjZre1PR3KF7JIZ0PiS9tSne46NPabaHTS1Y"></img>
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
                <ul className="contactInfo">
                    <li key="linkedin"><FontAwesomeIcon icon={faLinkedinIn}/></li>
                    <li key="github"><FontAwesomeIcon icon={faGithub}/></li>
                    <li key="angellist"><FontAwesomeIcon icon={faAngellist}/></li>
                </ul>

            </Menu>
        );
    }
}


export default Bio