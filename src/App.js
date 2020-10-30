import './App.css';
import Question from "./components/Question"
import Bio from "./components/Bio"

function App() { 

  return (
    <div className="App">
      <header className="App-header">
        <Bio/>
        <Question/>
      </header>
    </div>
  )
}

export default App;
