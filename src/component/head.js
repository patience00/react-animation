import React, {Component} from 'react';
import {Button} from 'antd';
import logo from "../logo.svg";



export default class Head extends Component{


    toNext=()=>{
        this.props.history.push('/move1');
    }

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Button type="primary" onClick={this.toNext}>下一个</Button>
                </header>
            </div>
        )
    }
}

