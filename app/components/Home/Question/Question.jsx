import React, { Component } from 'react'

import './Question.scss';

class Question extends Component{
    constructor(){
        super();
        this.state = {
            title: 'Co by tu zjeść ...'
        }
    }
    render(){
        const { title }= this.state
        return(
            <div className="questionComp">
                <div className="questionComp__title">
                    {title}
                    <i className="fas fa-question"></i>
                    <i className="fas fa-question quest2"></i>
                </div>
            </div>
        )
    }
}

export default Question
