// Code ClickityClick Component Here

import React from 'react'

class ClickityClick extends React.Component{
    
    constructor(){
        super()
        this.state = {
            toggled: false
        }
    }

    handleClick = () => {
        this.setState( (prevState) => {return { toggled: !prevState.toggled} })
    }
    render(){
        return(
            <div onClick={this.handleClick}>
                { this.state.toggled ? "ON" : "OFF"}
            </div>
        )
    }
}

export default ClickityClick;