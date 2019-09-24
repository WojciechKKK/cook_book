import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import InputKeyword from '../InputKeyword/InputKeyword.jsx'
import AllDishes from '../Other/AllDishes.jsx'

import './SecondBreakfast.scss';
class SecondBreakfast extends Component{
    constructor(){
        super();
        this.state = {
            name: 'secondbreakfast',
            dishes: [],      // will save dishes found
            valFromUser: '',
            showResult: false,
        }
    }
    
    componentDidMount = () => {
        if(this.props.choose.length > 0){
            this.setState({
                dishes: this.props.choose,
                showResult: true
            })
        } else{
            this.setState({
                dishes: this.props.choose,
            })
        }
    }

    clearRecipe = () => {
        if(typeof this.props.fnClearRecipe == 'function'){
            this.props.fnClearRecipe();
        };
        this.setState({
            showResult: false,
            dishes: []
        })
    }
 
    //search all recipe
    searchRecipe = (text) => {
 
        let data = this.props.recipe;
        let dataFromUser = text
        let finalDishes = data.filter(({keyword}) => keyword.indexOf(dataFromUser) >= 0 );
        this.setState({
            showResult: true,
            dishes: finalDishes,
            valFromUser: text
        });
    }
    render(){
        const { dishes, showResult, name } = this.state;
        return(
            <div className="secondBreakfastComp">
                {name}
                <InputKeyword fnSetKeyword={this.searchRecipe} />
                <Link to='/' onClick={this.clearRecipe}>
                    back
                </Link>
                {
                    showResult
                    ? <AllDishes dishes={dishes} fnSetDishes={this.props.fnSetDishes} fnSetChooseDishes={this.props.fnSetChooseDishes}/>
                    : <p>ostatnie dania</p>
                }
            </div>
        )
    }
} 

export default SecondBreakfast