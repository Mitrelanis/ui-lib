import "./index.css";
function Input(props) {
    const {type = "text",
        placeholder = "",
        value,
        onChange,
        disabled = false,
        label,
        danger = false} = props;

    

    return     <div className={`input-container ${danger ? "danger" : ""}`}>
    {label && <label className="input-label">{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="input-field"
    />
  </div>

}

export default Input;