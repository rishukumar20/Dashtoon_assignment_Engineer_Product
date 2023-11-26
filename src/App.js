import React from "react";
import { Box } from "@mui/material";
import Input from "./components/Input";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflowX: "hidden",
        overflowY: "scroll",
        background: "#05080F",
        color: "#4B0082",
        fontFamily: "Roboto, sans-serif",
        minWidth: "100vw",
        minHeight: "100vh",
        padding: "20px", // Add padding for content
        boxSizing: "border-box", // Include padding and border in the element's total width and height
      }}
    >
      <Input />
    </Box>
  );
}

export default App;
