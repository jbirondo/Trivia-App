import './App.css';
import Question from "./components/Question"
import Bio from "./components/Bio"
import Splash from "./components/Spash"

function App() { 

  return (
    <div className="App" id="outer-container">
      <Bio pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <div id="page-wrap">
          <Splash/>
        </div>
      </header>
    </div>
  )
}

export default App;
