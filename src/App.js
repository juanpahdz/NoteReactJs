import React, { Component } from 'react';
import './App.css';
import Note from './components/note/Notes';
import Form from './components/Noteform/form';

import firebase from 'firebase';
import { DB_CONFIG } from './config/config';
import 'firebase/database';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [
        // {id: 1, titulo: 'note', descripcion: 'irme a cojer ami tia abuela nataly', hora: '7 pm'},
        // {id: 2, titulo: 'note', descripcion: 'irme a cojer a greicy rendon', hora: '7 pm'},
      ]    
      
    }
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('notes');
  }
  
  componentDidMount = () => {

    const { notes } = this.state;
    this.db.on('child_added', snap => {
      notes.push({
        id: snap.key,
        titulo: snap.val().titulo,
        hora: snap.val().hora,
        descripcion: snap.val().descripcion
      })
    this.setState({ notes })
    })
  
   this.db.on('child_removed', snap => {
    for(let i = 0; i < notes.length; i++){
      if(notes[i].id = snap.key) {
        notes.splice(i, 1);
      }
    }
  this.setState({ notes })
  })
}

  remove = (Id) => {
    this.db.child(Id).remove(); 
  }

  addNote = (title, description, time) => {
    // let { notes } = this.state; 
    // notes.push({
    //   id: notes.length + 1,
    //   titulo: title,
    //   descripcion: description,
    //   hora: time,
    // })
    // this.setState({
    //   notes: notes
    // })

    this.db.push().set({titulo: title, descripcion: description, hora: time})
    
  }
  render(){
  
    return (
      <React.Fragment>
          <div className="notesHeader">
            <h1>React and Firebase app</h1>
          </div>
          <div className="wrap">
            <Note notes={this.state.notes} removeNote={this.remove}/>
            <Form addNote={this.addNote}></Form>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
