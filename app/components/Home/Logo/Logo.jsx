import React, { Component } from 'react'

import './Logo.scss';

class Logo extends Component{
    constructor(){
        super();
        this.state = {
            title: 'health'
        }
    }
    render(){
        const { title }= this.state
        return(
            <div className="logoComp">
                <div className="logoComp__img"></div>
                <h1 className="logoComp__name">
                    {title}
                </h1>
                
            </div>
        )
    }
}

export default Logo
