import React, { useState } from 'react';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(noteItem => {
        return <Note title={noteItem.title} content={noteItem.content} />;
      })}

      <Footer />
    </>
  );
}

export default App;
