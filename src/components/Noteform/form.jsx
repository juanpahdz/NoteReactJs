import React, { Component } from 'react'
import './form.css'
class Form extends Component {

    addNote = () => {
        this.props.addNote(this.titleinput.value, this.descripcioninput.value, this.Horainput.value)
        this.titleinput.value = "" 
        this.descripcioninput.value = "" 
        this.Horainput.value = ""
    }
    prevent = (e) => {
        e.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
                <div className="container2">
                    <form onSubmit={this.prevent} action="">
                        <label htmlFor="titulo">Titulo</label>
                        <input name="name" type="text" ref={titulo => {this.titleinput = titulo}}/>
                        <label htmlFor="Hora">Hora</label>
                        <input name="hora" type="text" ref={Hora => {this.Horainput = Hora}}/>
                        <label htmlFor="Descripcion" >Descripcion</label>
                        <input name="Descripcion" type="text"ref={descripcion => {this.descripcioninput = descripcion}}/>
                        <button onClick={this.addNote} type="submit" className="BtnForm">Enviar</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default Form; 