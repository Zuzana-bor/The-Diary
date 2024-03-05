import PropTypes from 'prop-types';

const Sidebar = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <div className="border-r-4 w-full max-w-96 min-h-dvh ms:hidden bg-stone-300">
      <div className="flex justify-between p-5">
        <h1 className="text-6xl">Notes</h1>

        <button
          onClick={onAddNote}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
      <div>
        {notes.map((note) => {
          return (
            <div className="bg-stone-400 hover:bg-stone-500 p-5" key={note.id}>
              <div className="flex justify-between">
                <strong className="text-3xl">{note.title}</strong>
                <button
                  onClick={() => onDeleteNote(note.id)}
                  className="bg-red-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  DELETE
                </button>
              </div>
              <p>{note.body && note.body.substr(0, 100) + '...'}</p>
              <small>
                Last modified{' '}
                {new Date(note.lastModified).toLocaleDateString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      lastModified: PropTypes.number.isRequired,
    }),
  ),

  onAddNote: PropTypes.func,
  onDeleteNote: PropTypes.func,
};

export default Sidebar;
