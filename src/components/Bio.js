import React from "react";
import { stack as Menu } from 'react-burger-menu'
import "./Bio.css"

class Bio extends React.Component {
    showSettings (event) {
        event.preventDefault();
  }

    render () {
          return (
            <Menu right>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/salads">
                Salads
            </a>
            <a className="menu-item" href="/pizzas">
                Pizzas
            </a>
            <a className="menu-item" href="/desserts">
                Desserts
            </a>
            </Menu>
        );
    }
}


export default Bio