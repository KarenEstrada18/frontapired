import React, { Component } from 'react';
import './pageHeader-about.css';

class PageHeaderAbout extends Component {
    render() { 
        return (  
        <React.Fragment>
            <header class="masthead">
            <img className= "imagenp"src="img/islas.jpg" alt = ""/>
                <div class="overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-md-10 mx-auto">
                                <div class="page-heading">
                                <h1>Acerca de la plataforma</h1>
                                <span class="subheading">Información para la comunidad estudiantil de la UNAM.</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>
    </React.Fragment>
        );
    }
}
 
export default PageHeaderAbout;