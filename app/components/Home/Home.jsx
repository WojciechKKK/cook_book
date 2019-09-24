import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo.jsx'
import Question from './Question/Question.jsx'
import './Home.scss';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            categoryList: ['breakfast', 'second_breakfast', 'dinner', 'dessert', 'supper', 'snacks'],  //for other component - set in CookBook
            viewCategoryList: ['śniadanie', 'drugie śniadanie', 'obiad', 'deser', 'kolacja', 'przekąski'] //view for user
            // !!! categoryList.length === viewCategoryList.length 
        }
    }
    setCategory = (e) => {
        const elementCategoryCount = e.currentTarget.dataset.id;
        const finalCategory = this.state.categoryList[elementCategoryCount];
        this.downloadData(finalCategory)
        // if(typeof this.props.fnSetCategory == 'function'){
        //     this.props.fnSetRecipe(recipe)
        // }
    }
    //download recipe and send this (this.props.fnSetRecipe) for the Home Component
    downloadData = (text) => {
        // console.log('pobieram', text)
        fetch(`http://localhost:3000/${text}`)
            .then(resp => resp.json())
            .then(data => {
                //przekazuje recipe
                this.props.fnSetRecipe(data,text) ;
            })
            .catch(err => console.error(err))
    }
    render(){
        const { categoryList, viewCategoryList } = this.state
        return(
            <div className="homeComp">
                <Logo />
                <Question />
                <div className="homeComp__category">
                    {/* <div className="home__title">
                        Wybierz kategorie:
                    </div> */}
                    {
                        viewCategoryList.map((el, i) => {
                        return (
                                <Link key={el} className="homeComp__forward" data-id={i} onClick={this.setCategory} to={`/${categoryList[i]}`}>
                                    {el}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home