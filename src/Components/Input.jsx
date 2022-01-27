import React, { useState } from "react";

function InputArea(props) {
  const [Takenote, setTakeNote] = useState("");
  const [Expanded, setExpanded] = useState(false);

  function noteChange(event) {
    setTakeNote(event.target.value);
  }

  function expandNote() {
    setExpanded(true);
  }

  return (
    <div className="Notice">
      <textarea
        onChange={noteChange}
        onClick={expandNote}
        placeholder="Take a note..."
        rows={Expanded ? 3 : 1}
        value={Takenote}
      />
      <button onClick={() => {
            props.addTheNote(Takenote);
            setTakeNote("");
          }}
      >+</button>
    </div>
  );
}

export default InputArea;
