import Button from "./components/Button";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Heading from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";
import Crypto from "./components/Crypto";
import React, { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  
  const handleUpdate = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading Level="1">Cryptocurrency Prices</Heading>
      <Button variant="bordered" size="md" onClick={handleUpdate}>
        Update
      </Button>
      <Input placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <Crypto searchTerm={searchTerm} refreshKey={refreshKey}/>
    </div>
  );
}

export default App;
