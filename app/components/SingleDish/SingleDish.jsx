import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import './SingleDish.scss';

class SingleDish extends Component{
    render(){
        // console.log(this.props.choose)
        const AllElements = styled.div`
            height: 100vh;
            width: 100%;
            background-image: url(${this.props.dishes.img});
            background-size: cover;
            background-repeat: no-repeat;
        `
        return(
            <div className="singleDishComp">
                <AllElements>
                    info:
                    {this.props.dishes.name}
                    {this.props.dishes.img}
                    <Link to={`/${this.props.category}`} >
                        back
                    </Link>
                </AllElements>
                

            </div>
        )
    }
}

export default SingleDish
