import React, {Component} from 'react'

class Sum extends Component{

  constructor(){
    super()
    this.state = {
      num1: 0,
      num2: 0,
      sum: null
    }
  }

  handleInput1(val){
    this.setState({num1: parseInt(val)})
  }
  handleInput2(val){
    this.setState({num2: parseInt(val)})
  }
  handleButton(num1, num2){
    this.setState({sum: num1+num2})
  }

  render(){
    return(
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine' onChange={e => this.handleInput1(e.target.value)}></input>
        <input className='inputLine' onChange={e => this.handleInput2(e.target.value)}></input>
        <button className="confirmationButton" onClick={()=> this.handleButton(this.state.num1, this.state.num2)} />
        <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum