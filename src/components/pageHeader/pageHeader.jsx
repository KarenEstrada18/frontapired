import React, { Component } from 'react';
import './pageHeader.css';

class PageHeader extends Component {
    render() {
      return (
    <React.Fragment>
        <header className="masthead">
          <img className= "imagenp"src="https://pbs.twimg.com/media/DHm9TcKV0AAif5L.jpg" alt = ""/>
        </header>
        <div className="divisor"></div>
    </React.Fragment>
      );
    }
  }
  
  export default PageHeader;