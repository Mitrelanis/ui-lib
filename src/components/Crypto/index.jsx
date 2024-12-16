import React, { useState, useEffect } from "react";
import Accordion from "../Accordion";
import "./index.css";
import Tooltip from "../Tooltip";
import Typography from "../Typography";

function Crypto({ searchTerm, refreshKey }) {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchCurrencies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setCurrencies(data.data);
      console.log("Data fetched:", data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, [refreshKey]);

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ width: "100%" }}>
      {filteredCurrencies.map((currency) => (
        <Accordion key={currency.id} title={currency.name}>
          <Typography size="lg">
            <b>Symbol:</b> {currency.symbol}
          </Typography>
          <Typography size="lg">
            <b>Price USD:</b> ${currency.price_usd}
          </Typography>
          <Typography size="lg">
            <b>Price BTC:</b> ${currency.price_btc}
          </Typography>
          <Tooltip text="The market capitalization of a cruptocurrency is calculated by multiplying the number of coins in crculations by the current price">
            <Typography size="lg">
              <b>Market Cap USD:</b> ${currency.market_cap_usd}
            </Typography>
          </Tooltip>
          <Typography size="lg">
            <b>Percent Change 24h:</b>{" "}
            <span style={{ color: "red" }}>{currency.percent_change_24h}%</span>
          </Typography>
        </Accordion>
      ))}
    </div>
  );
}

export default Crypto;
