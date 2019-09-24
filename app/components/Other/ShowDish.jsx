import React, { Component } from 'react'
// import SlideDown from 'react-slidedown';
// import 'react-slidedown/lib/slidedown.css'
import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom'


class ShowDishes extends Component{
    setDishes = (e) => {
        this.props.fnSetDishes(this.props.info);
        this.props.fnSetChooseDishes(this.props.dishes)
    }
    render(){
        console.log(this.props.keyword)
        return(
            <div className="showDishesComp" onClick={this.setDishes}>
               <p className="showDishesComp__text"> 
               <Link to='/singleDish' >
                        {this.props.info.name}
                    </Link>
                </p>
            </div>
        )
    }
}

export default ShowDishes