import logo from "./logo.svg";
import "./App.css";
import { Box, InputBase, TextField, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const handleInputChange = (name) => {
    return (e) => {
      console.log("name --->", name);
      console.log("value --->", e.target.value);
      const val = e.target.value;

      if (name === "first") {
        setFirstValue(val);
      } else {
        setSecondValue(val);
      }
    };
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={handleInputChange("first")}
            value={firstValue}
            label="First value"
            color="success"
            focused
          />
          <TextField
            onChange={handleInputChange("second")}
            value={secondValue}
            label="Second value"
            color="success"
            focused
          />
        </Box>
        <Typography color="black">
          Result: {firstValue + secondValue}
        </Typography>
      </header>
    </div>
  );
}

export default App;
