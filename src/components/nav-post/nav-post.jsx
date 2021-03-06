import React, { Component } from 'react';
import './nav-post.css';

class NavPost extends Component {
    render() { 
        return (
            <React.Fragment>
          <nav className="navbar navbar-expand-md sticky-top">
            <a className="navbar-brand titulo" href="#home">
            <img src="logo.png" alt="logo"/> PLATAFORMA UNIVERSITARIA
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/#home">  INICIO  <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">  ACERCA DE...  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/post">  POST  </a>
                </li>
              </ul>
            </div>
          </nav>
        </React.Fragment>
          );
    }
}
 
export default NavPost;