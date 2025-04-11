import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DecksPage from "./pages/DecksPage";
import SwipePage from "./pages/SwipePage";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: "1rem",
          }}
        >
          <Routes>
            <Route path="/" element={<DecksPage />} />
            <Route path="/decks" element={<DecksPage />} />
            <Route path="/deck/:deckId" element={<SwipePage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
