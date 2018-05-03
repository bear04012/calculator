import React, { Component } from 'react';

import Calculator from './util/Calculator';

import './App.css';


const Answer = (props) => {
    return(
        <div className="answer">
            <h3 className="value">{props.calculator.getDisplayedValue()}</h3>
        </div>
    )
}

const Button = (props) => {
    return (
        <button className="btn" onClick={ () => {
            props.onClick(props.symbol);
        }}>
            {props.symbol}
        </button>
        );
}


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            calculator: new Calculator()
        }
        this.onButtonClick=this.onButtonClick.bind(this)
    }
    onButtonClick(symbol) {
        this.state.calculator.onClick(symbol);
        this.forceUpdate();
    }
    render() {
        
        let symbols = ['AC','+/-','%','÷','7','8','9','x','4','5','6','-','1','2','3','+','0','00','.','='];
        
        return (
            <div>
                <div className="App">
                    <Answer calculator={this.state.calculator}/>
                    {symbols.map(s => <Button key={s} symbol={s} onClick={this.onButtonClick} />)}
                </div>
            </div>
            
        );
    }
}

export default App;
