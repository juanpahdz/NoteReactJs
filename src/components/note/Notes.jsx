import React, { Component } from 'react';
import './Notes.css';
class Notes extends Component {
    constructor(){
        super(); 
      
    }
    handleSubmint = (e) => {
        e.preventDefault
    }
    
    handleRemove = (id) => {
        console.log(id);
    }
    render(){ 
        
        const Notes = this.props.notes.map(note => { 
            return (
            <form onSubmit={this.handleSubmint} key={note.id} className="Notes">
                <div className="titleNote">
                    <span className="cross" onClick={this.handleRemove.bind(this, note.id)}>❌</span>
                    <div className="Titulo"> {note.titulo} {note.id}</div>
                </div>
                <div className="Hora"><span>⏰</span>   {note.hora}</div>
              <p className="Descripcion">{note.descripcion}</p>
              <div className="FooterNotes"><button className="BtnNotes">Cumplido</button></div>
            </form>
            )
          })

        return(
            <React.Fragment>
                <div className="container">
                    { Notes }
                </div>
            </React.Fragment>
        )
    }
}

export default Notes;