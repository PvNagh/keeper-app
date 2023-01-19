import React from "react";
import { useState } from "react";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {


  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    }
    )
  }
  function manageClick() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
        {expand ? <input onChange={handleChange} value={note.title} name="title" placeholder="Title" /> : null}
        <textarea onClick={manageClick} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={expand ? 3 : 1} />
        <Zoom in={expand?true:false}>
          <Fab onClick={handleClick}><LibraryAddIcon /></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;