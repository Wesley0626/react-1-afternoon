import React, {Component} from 'react'


class Palindrome extends Component{

  constructor(){
    super()
    this.state={
      userInput: '',
      palindrome: ''
    }
  }

handleInput(val){
  this.setState({userInput: val})
}

handleButton(userInput){
  // let reverse = userInput => userInput.split("").reverse().join("")
  // why can't this be written like this?
  
  let backwards = userInput;
  backwards = backwards.split('');
  backwards = backwards.reverse();
  backwards = backwards.join('');

  console.log(userInput)
// console.log(reverse)
  let forwards = userInput
  if(forwards === backwards){
    this.setState({palindrome: true})
  }
  else this.setState({palindrome: false})
}

  render(){
    return(
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input className='inputLine' onChange={e => this.handleInput(e.target.value)}/>
        <button className='confirmationButton' onClick={() =>this.handleButton(this.state.userInput)}>CLICK CLICK</button>
        <span>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
      </div>
    )
  }
}

export default Palindrome