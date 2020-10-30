import './App.css';
import Question from "./components/Question"
import Bio from "./components/Bio"

function App() { 

  return (
    <div className="App" id="outer-container">
      <Bio pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header">
        <div id="page-wrap">
          <Question/>
        </div>
      </header>
    </div>
  )
}

export default App;
