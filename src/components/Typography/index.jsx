import "./index.css";
function Typography(props) {
  const { size = "md", className="", children } = props;

  return (
    <p className={`typography typography-${size} ${className}`}>
      {children}
    </p>
  );
}

export default Typography;
