import React, { Component } from 'react'

class LastDishes extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.dishes)
        return(
            <div className="lastDishesComp">
                {
                    this.props.dishes.map((el,i) => <p className="lastDishesComp__element"key={i}>{el.name}</p>)
                }
            </div>
        )
    }
} 

export default LastDishes