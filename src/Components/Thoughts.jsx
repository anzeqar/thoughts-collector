import React from "react";
import Thought from "./Thought.jsx";
const Thoughts = ({ thoughts, onDelete, readMode }) => {
  const mapThoughts = thoughts.map((thoughts) => {
    return (
      <Thought
        id={thoughts.id}
        key={thoughts.id}
        thought={thoughts.thought}
        dateTime={thoughts.datetime}
        onDelete={onDelete}
        readMode={readMode}
      />
    );
  });
  return <div className="container mt-4">{mapThoughts}</div>;
};

export default Thoughts;
