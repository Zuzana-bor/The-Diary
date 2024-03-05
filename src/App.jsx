import Sidebar from './Sidebar';
import { useState } from 'react';
import uuid from 'react-uuid';
import MainArea from './MainArea';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitle Note',
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
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
      <MainArea />
    </div>
  );
}

export default App;
