import "./index.css";
function Heading(props) {
  const { level = "1", className = "", children } = props;

  const Tag = `h${level}`;

  return <Tag className={`heading heading-${level} ${className}`}>{children}</Tag>;
}

export default Heading;
