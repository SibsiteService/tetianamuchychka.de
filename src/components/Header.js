import React from "react";
import Nav from "./Nav";

import "../assets/css/header.css";

export default class Header  extends React.Component{
    render(){
        return(  
        <header>
           <Nav toggleLanguage ={this.props.toggleLanguage}/>
        </header>
        );
    }
}