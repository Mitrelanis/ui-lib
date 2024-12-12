import "./index.css";
function Heading(props) {
  const { level = "1", className = "", children } = props;

  const Tag = `h${level}`;

  return <Tag className={`typography typography-${level} ${className}`}>{children}</Tag>;
}

export default Heading;
