import React, { Component } from 'react';
import './postContent';
import addComent from '../../services/addComent'

class PostContent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            titulo:"",
            autor:"",
            contenido:""
        }

    }

    onInpuntCheck = (event) => {
        let name = event.target.name
        let value = event.target.value 

        this.setState({
            [name]:value
        })
        console.log(this.state);
    }

    onFormSubmit = (e) => {
        console.log("entro shido");
        e.preventDefault();
        addComent(this.state).then((response)=>{
            console.log(response.data)
        return alert('El post fue creado con exito')
        }).catch((err)=>{
            console.log(err)
            return alert('El post no fue publicado')
        })
        /* login(this.state).then((resp) => {
            if(resp.status === 201){
                let token = resp.data.token
                localStorage.setItem('token',token);
                this.props.history.push('/profile')
            }

        }).catch((err) => {
            this.handleCloseModal()
            alert("El usuario o la contraseña son incorrectos.")
            console.log(err)
        }) */
    }

    render() { 
        return (  
<React.Fragment>
<div className="col-sm-12 col-md-5 formulario">
            <br/><h2>POST</h2>
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <br/><br/><label htmlFor="">Titulo</label>
                    <input type="text" className="form-control" id="titulo" value={this.state.titulo} onChange={this.onInpuntCheck} placeholder="" name="titulo"/>
                </div>
                <div className="form-group">
                    <label htmlFor="autor">Autor</label>
                    <input type="text" className="form-control" id="autor" value={this.state.autor} onChange={this.onInpuntCheck} placeholder="" name="autor"/>
                </div>
                <div className="form-group">
                    <label htmlFor="contenido">Post</label>
                    <input type="text" className="form-control" id="contenido" value={this.state.contenido} onChange={this.onInpuntCheck} placeholder="" name="contenido"/>
                </div>
                <br/><br/>
                <button type="submit" className="btn-warning btn-block " ><b/> Enviar</button>
            </form>
        </div>               
</React.Fragment>
        );
    }
}
 
export default PostContent;