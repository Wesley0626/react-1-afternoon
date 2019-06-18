import React, {Component} from 'react'

class FilterString extends Component{
  constructor(){
    super()
    this.state = {
      unFilteredArray:['Happy', 'sad', 'excited', 'Rainbows', 'Darkness', 'SUNSHINE', 'sanity'],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

handleButton(userInput){
  let newArr = []
  let unFilteredArray = this.state.unFilteredArray
  for(let i = 0; i < unFilteredArray.length; i++){
    if(unFilteredArray[i].toLowerCase().includes(userInput.toLowerCase())){
      newArr.push(unFilteredArray[i])
    }
  }
  this.setState({filteredArray: newArr})
}

  render(){
    return(
      <div className='puzzleBox filterStringPB'>
        <h4>FilterString</h4>
        <span className='puzzleText'>Un-Filtered: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className='inputLine' onChange={e => this.handleChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={() => this.handleButton(this.state.userInput)}>Here We Go Again</button>
        <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString