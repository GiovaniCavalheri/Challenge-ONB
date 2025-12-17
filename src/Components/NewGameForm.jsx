import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.PropTypes = {
    addGame: PropTypes.func
}

function NewGameForm({ addGame }) {
  // ==> criando States
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  // ==> Function submissao do form
  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <TextInput
        value={title}
        setValue={setTitle}
        /> 
      <div>
        <label htmlFor="cover">Capa:</label>
        <input
          type="text"
          id="cover"
          value={cover}
          onChange={(ev) => setCover(ev.target.value)}
        />
      </div>
      <button>Adicionar</button>
    </form>
  );
}

export default NewGameForm;
