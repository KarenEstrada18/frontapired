import React, { Component } from 'react';
import './pageHeader-post';

class PageHeaderPost extends Component {
    render() { 
        return (  
            <React.Fragment>
                <header class="masthead">
                    <img src="img/post-bg.jpg" alt=""/>
                    <div class="overlay"></div>
                        <div class="container">
                             <div class="row">
                                <div class="col-lg-8 col-md-10 mx-auto">
                                    <div class="post-heading">
                                        <h2 class="subheading">Escribe una noticia de la UNAM </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </header>
            </React.Fragment>
        );
    }
}
 
export default PageHeaderPost;