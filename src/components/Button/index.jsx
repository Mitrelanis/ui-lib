import "./index.css";
function Button(props) {
    const {onClick, size = "md", variant = "primary", children} = props;
    const className = `my-button my-button--${variant} my-button--${size}`;

    return <button  onClick={onClick} className={className}>{children}</button>
}

export default Button;