import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() { 
        return (
        <React.Fragment>
         <div className="divisor"></div>
        <footer>
        <div className="pie">
        <h4 className="piet">Dev.f</h4><br/>
        <h5 className="piep">Alex * Esteban * Jesus * Edgar * Karen </h5>
        </div>
        </footer>
    </React.Fragment>
          );
    }
}
 
export default Footer;