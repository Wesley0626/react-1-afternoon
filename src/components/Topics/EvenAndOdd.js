import React, {Component} from "react"

class EvenAndOdd extends Component{

constructor(){
  super()
  this.state = {
    evenArray: [],
    oddArray: [],
    userInput: ''
  }
}

handleChange(value){
  this.setState({userInput: value})
}

handleButton(userInput){
  let arr = userInput.split(',')
  let evens = []
  let odds = []

  arr.map(num => num % 2 === 0 ? evens.push(parseInt(num)) : odds.push(parseInt(num)))

console.log(odds)
  this.setState({evenArray: evens})
  this.setState({oddArray: odds})
}

render(){
  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
      <button className="confirmationButton" onClick={() => this.handleButton(this.state.userInput)}>Click Me!</button>
      <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
    </div>
  )
 }
}

export default EvenAndOdd