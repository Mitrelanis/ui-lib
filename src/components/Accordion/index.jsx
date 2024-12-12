import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css"; // Add necessary styles here

function Accordion(props) {
    const {title = "", defaultOpen = false, children} = props;
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };
    
      return (
        <div className="accordion">
          <div className="accordion-header" onClick={toggleAccordion}>
            <h3>{title}</h3>
            <span className="accordion-toggle">{isOpen ? "-" : "+"}</span>
          </div>
          {isOpen && <div className="accordion-body">{children}</div>}
        </div>
      );
}
export default Accordion;

