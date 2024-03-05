import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const MainArea = ({ activeNote, onUpdateNote }) => {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,

      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div>No note selected</div>;

  return (
    <div className=" center w-full ">
      <div
        className="w-9/8
       m-5  "
      >
        <input
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
          type="text"
          id="title"
          autoFocus
          className="w-full  border h-20"
        />
        <textarea
          value={activeNote.body}
          onChange={(e) => onEditField('body', e.target.value)}
          id="body"
          placeholder="write your note here"
          className="w-full min-h-80 border mt-5"
        />
      </div>
      <div className="bg-stone-100 min-h-dvh p-5">
        <h1 className="text-4xl font-bold">{activeNote.title}</h1>
        <ReactMarkdown className="">{activeNote.body}</ReactMarkdown>
      </div>
    </div>
  );
};

MainArea.propTypes = {
  activeNote: PropTypes.func,
  onUpdateNote: PropTypes.func,
};
export default MainArea;
