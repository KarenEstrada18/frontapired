import React, { Component } from 'react';
import './mainContent.css';

class MainContent extends Component{
    render(){
        return(
    <React.Fragment>
    <h2 className="text-center">Noticias</h2><br/>
    <div className="container-cards">
      <div className="row">
    <div className="card-group col-lg-11 mx-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Destaca UNAM avances en cumplimiento de peticiones de CCH Azcapotzalco</h5>
          <p className="card-text">Serán instalados botones de emergencia en el plantel y cámaras de videovigilancia fuera de él, para incrementar la seguridad.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">CCH Azcapotzalgo seguirá en paro activo hasta que se cumpla pliego petitorio</h5>
          <p className="card-text">Los estudiantes del plantel aseguran que la Rectoría de la UNAM no satisfizo sus exigencias.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Detienen a undécimo involucrado en hechos violentos ocurridos en la UNAM</h5>
          <p className="card-text">El hombre de 21 años recibió la orden de aprehensión por el delito de motín; fue capturado por la Procuraduría capitalina en el Estado de México.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
    <div className="card-group col-lg-11 mx-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">La llama de la protesta estudiantil en México prende en la UNAM</h5>
          <p className="card-text">Serán instalados botones de emergencia en el plantel y cámaras de videovigilancia fuera de él, para incrementar la seguridad.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">México: ¿Qué está ocurriendo en la UNAM? Violencia, alumnos ...</h5>
          <p className="card-text">Los estudiantes del plantel aseguran que la Rectoría de la UNAM no satisfizo sus exigencias.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Estudiantes se solidarizan con protesta de estudiantes de la UNAM en ...</h5>
          <p className="card-text">El hombre de 21 años recibió la orden de aprehensión por el delito de motín; fue capturado por la Procuraduría capitalina en el Estado de México.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
</React.Fragment>
        );
    }
}

export default MainContent;