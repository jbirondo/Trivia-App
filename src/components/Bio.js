import React from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

class Bio extends React.Component {
  componentWillMount() {
    this.setState({
      isMenuOpened: false
    });
  }

  render() {
    return (
      <OffCanvas
        width={300}
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"left"}
      >
        <OffCanvasBody
          className="asd"
          style={{ fontSize: "30px" }}
        >
          <p>
            <a href="#" onClick={this.handleClick.bind(this)}>
              >>
            </a>{" "}
          </p>
        </OffCanvasBody>
        <OffCanvasMenu className="dsa">
          <p>Placeholder content.</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>
              <a href="#" onClick={this.handleClick.bind(this)}>
                Toggle Menu
              </a>
            </li>
          </ul>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}

export default Bio