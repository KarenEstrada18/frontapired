import React, { Component } from 'react';
import './mainContent-about.css';

class MainContentAbout extends Component {

    render() { 
        return ( 

            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <p>Es inevitable que la comunidad universitaria se vea obligada a enfrentar coyunturas, pues su calidad formadora de los individuos de toda la nación la convierte en blanco de los intereses que puedan convenir a particulares.</p>
                            
                            <br/><p>Este sitio pretende funcionar como una herramienta informativa que permita a la comunidad estar organizada de manera permanente y eficiente, invitando a la totalidad de sus miembros a ejercer sus responsabilidades y derechos como agentes activos de la realidad que se crea para la Universidad.</p>

                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MainContentAbout;