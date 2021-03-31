import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = props => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            value={note.title}
            onChange={handleChange}
            name='title'
            placeholder='Title'
          />
        )}

        <textarea
          value={note.content}
          onChange={handleChange}
          name='content'
          onClick={expand}
          placeholder='Take a note...'
          row={setExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
