import React from "react"

class Section  extends React.Component{
  render(){
      return(  
          <div className="flex-column flex-sa section">
            {this.props.children}
          </div>
      );
  }
}


export default Section
