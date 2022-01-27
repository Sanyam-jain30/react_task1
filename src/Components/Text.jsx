import React from "react";

function Note(pros) {
  return (
    <div className="note">
      <p contentEditable="true">{pros.content}</p>
      <button
        onClick={() => {
          pros.onDeleted(pros.id);
        }}
      >
        <span>
            <i className="fa fa-trash" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}

export default Note;
