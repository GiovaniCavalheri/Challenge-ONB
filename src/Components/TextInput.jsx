import PropTypes from "prop-types";

TextInput.PropTypes = {
    value: PropTypes.string, 
    setValue: PropTypes.func
}

function TextInput({ value, setValue }) {

  return (
    <div>
      <label htmlFor="title">Título:</label>
      <input
        type="text"
        id="title"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
}

export default TextInput;
