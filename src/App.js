import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Box, CssBaseline } from "@mui/material";

// Lazy load page components
const LazyDecksPage = lazy(() => import("./pages/DecksPage"));
const LazySwipePage = lazy(() => import("./pages/SwipePage"));

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
          {/* Wrap Routes in Suspense */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<LazyDecksPage />} />
              <Route path="/decks" element={<LazyDecksPage />} />
              <Route path="/deck/:deckId" element={<LazySwipePage />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
