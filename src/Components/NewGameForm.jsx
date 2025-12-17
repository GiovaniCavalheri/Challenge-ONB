import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.PropTypes = {
  addGame: PropTypes.func,
};

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
      <TextInput label="Titulo" value={title} setValue={setTitle} />
      <div>
        <TextInput label="Capa" value={cover} setValue={setCover} />
      </div>
      <button type="submit">Adicionar à biblioteca</button>
    </form>
  );
}

export default NewGameForm;
