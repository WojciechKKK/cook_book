import React, { Component } from 'react'
import NotDishes from './NotDishes.jsx'
import ShowDish from './ShowDish.jsx'

class AllDishes extends Component{
    constructor(){
        super();
    }
    render(){
        let result = true
        if(this.props.dishes.length <= 0){
            result = false
        }
        // console.log(this.props.dishes)

        return(
            <div className="allDishesComp">
                {
                    result
                    ? <div className="allDishesComp_elements">
                        {
                            this.props.dishes.map((el,i) => <ShowDish key={el.id} info={el} fnSetDishes={this.props.fnSetDishes} fnSetChooseDishes={this.props.fnSetChooseDishes} dishes={this.props.dishes}/>)
                        }
                    </div>
                    : <NotDishes/>
                }
            </div>
        )
    }
} 

export default AllDishes