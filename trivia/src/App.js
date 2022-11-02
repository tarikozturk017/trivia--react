import React from "react"
import Homepage from "./components/Homepage";
import './style.css'

function App() {

  // const [questions, setQuestions] = React.useState([])
  // React.useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=10")
  //     .then(res => res.json())
  //     .then(data => setQuestions(data.results))
  // }, [])


  return (
    <div className="App">
     <img className="img--bottom-left" src="blob 5.png" alt=""/>
     {/* <p>{questions[0] && questions[0].category}</p> */}
     <Homepage />
     <img className="img--upper-right" src="blob 15.png" alt=""/>
    </div>
  );
}

export default App;
