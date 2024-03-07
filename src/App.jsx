import Sidebar from './Sidebar';
import { useEffect } from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import MainArea from './MainArea';
import LoginPage from './LoginPage';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || [],
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitle Note',
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updateNote) => {
    const updateNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote;
      }
      return note;
    });
    setNotes(updateNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="flex">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <MainArea activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      <LoginPage />
    </div>
  );
}

export default App;
