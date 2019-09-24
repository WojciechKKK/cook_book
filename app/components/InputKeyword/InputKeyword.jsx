import React, { Component } from 'react'
import './InputKeyword.scss';
class InputKeyword extends Component{
    constructor(){
        super();
        this.state = {
            valInput: '',
            btnText: 'Szukaj'
        }
    }
    sendVal = () => {
        if(typeof this.props.fnSetKeyword == 'function'){
            this.props.fnSetKeyword(this.state.valInput)
        };
        this.setState({
            valInput: ''
        })
    }
    handleSetInput = (e) => {
        this.setState({
            valInput: e.target.value
        })
    } 
    pressStartSearch = (e) => {
        if(e.charCode == 13){
            this.sendVal();
        }
    }
    startSearch = () => {
        this.sendVal();
    }
    render(){
        const { valInput, btnText } = this.state
        return(
            <div className="inputKeywordComp">
                <div className="inputKeywordComp__input">
                    <input 
                        id="ingredients"
                        type="text"
                        onChange={this.handleSetInput}
                        onKeyPress={this.pressStartSearch}
                        value={valInput}
                        placeholder="wpisz składniki*"
                        maxLength={50} />
                        <i className="searchIcon" onClick={this.sendVal}>
                        <i className="fas fa-search"></i>
                    </i>
                </div>
                <p className="inputKeywordComp__placeholder">*składniki rozdzielaj przecinkiem, np: sól, mięso </p>
                <button className="inputKeywordComp__btnSend" onClick={this.startSearch}>{btnText}</button>
            </div>
        )
    }
} 

export default InputKeyword