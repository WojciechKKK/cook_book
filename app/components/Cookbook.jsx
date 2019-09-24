import React, { Component } from 'react'
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'

import Home from './Home/Home.jsx'
import Breakfast from './Breakfast/Breakfast.jsx'
import SecondBreakfast from './SecondBreakfast/SecondBreakfast.jsx'
import Dinner from './Dinner/Dinner.jsx'
import Dessert from './Dessert/Dessert.jsx'
import Supper from './Supper/Supper.jsx'
import Snacks from './Snacks/Snacks.jsx'
import NotFound from'./NotFound/NotFound.jsx'
import SingleDish from './SingleDish/SingleDish.jsx'


class Cookbook extends Component {
    constructor(){
        super();
        this.state = {
            recipe: [],             //all recipes from category 
            categoryRecipe: '',      //category  
            dishes: [],               //choose dishes  
            chooseDishes: []        //choose dishes from user set by small comp
        }
    }
    setChooseDishes = (text) => {
        this.setState({
            chooseDishes: text
        })
    }
    setHandleDishes = (info) => {
        this.setState({
            dishes: info
        })
    }
    clearDishes = () => { 
        this.setState({
            dishes: ''
        })
    }
    setHandleRecipe = (data,text) => {
        this.setState({
            recipe: data,
            categoryRecipe: text
        });
        // console.log('home: ', text)
    }
    clearRecipe = () => {
        this.setState({
            recipe: [],
            categoryRecipe: '',
            dishes: '',               
            chooseDishes: []
        })
    }
    render(){
        const { recipe, dishes, chooseDishes, categoryRecipe } = this.state;
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/' render={(props) => <Home {...props} fnSetRecipe={this.setHandleRecipe} fnClearRecipe={this.clearRecipe} /> } />
                    <Route path="/breakfast" render={(props) => <Breakfast {...props}  recipe={recipe} choose={chooseDishes} fnClearRecipe={this.clearRecipe} fnSetDishes={this.setHandleDishes} fnSetChooseDishes={this.setChooseDishes} /> } />
                    <Route path="/second_breakfast" render={(props) => <SecondBreakfast {...props}  recipe={recipe} choose={chooseDishes} fnClearRecipe={this.clearRecipe} fnSetDishes={this.setHandleDishes} fnSetChooseDishes={this.setChooseDishes} /> } />
                    <Route path="/dinner" render={(props) => <Dinner {...props}  recipe={recipe} choose={chooseDishes} fnClearRecipe={this.clearRecipe} fnSetDishes={this.setHandleDishes} fnSetChooseDishes={this.setChooseDishes} /> } />
                    <Route path="/singleDish" render={(props) => <SingleDish {...props}  dishes={dishes} category={categoryRecipe}/> } />
                    <Route path="/dessert" render={(props) => <Dessert {...props}  recipe={recipe} choose={chooseDishes} fnClearRecipe={this.clearRecipe} fnSetDishes={this.setHandleDishes} fnSetChooseDishes={this.setChooseDishes} /> } />
                    <Route path="/supper" render={(props) => <Supper {...props}  recipe={recipe} choose={chooseDishes} fnClearRecipe={this.clearRecipe} fnSetDishes={this.setHandleDishes} fnSetChooseDishes={this.setChooseDishes} /> } />
                    <Route path="/snacks" render={(props) => <Snacks {...props}  recipe={recipe} choose={chooseDishes} fnClearRecipe={this.clearRecipe} fnSetDishes={this.setHandleDishes} fnSetChooseDishes={this.setChooseDishes} /> } />
                    <Route path='*' component={NotFound} />
                </Switch>
            </HashRouter>

        )
    }
}

export default Cookbook