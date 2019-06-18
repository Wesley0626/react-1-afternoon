import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
    super()
    this.state={
      unFilteredArray: [
        {name: "Wesley",
        color: 'Blue',
        age: 30
      },
      {
        name: "Terra",
        gender: 'female',
        dog: 1
      },
      {
        name: 'Nelson',
        gender: 'male',
        color: 'black',
        children: 3
      }
      ]
    }
    userInput: ''
    filteredArray: []
  }

  handleInput(value){
    this.setState({userInput: value})
  }

  handleButton(input){
    let arr = this.state.unFilteredArray
    let filteredPeople = []
    
    for(let i =0; i < arr.length; i++){
      if(arr[i].hasOwnProperty(input)){
        filteredPeople.push(arr[i])
      }
    }
  
  this.setState({filteredArray: filteredPeople})
  }


  render(){
    return(
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className='inputLine' onChange={e => this.handleInput(e.target.value)}></input>
        <button className='confirmationButton' onClick={() => this.handleButton(this.state.userInput)}>Why Me?!</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject