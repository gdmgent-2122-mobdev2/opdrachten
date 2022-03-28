import "./Input.css";

const Input = ({ type, value, name, onChange, disabled = false }) => {
  return (
    <input
      className="input"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
