import React from "react"
import Header from "./Header"

class Layout  extends React.Component{

  render(){
      return(  
        <>
          <Header toggleLanguage ={this.props.toggleLanguage}/>  
          <main>
            {this.props.children}
          </main>       
        </>
      );
  }
};


export default Layout
