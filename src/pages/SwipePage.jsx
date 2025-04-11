import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDeckById } from "../data/decks"; // Import function to get deck data
import FlashcardList from "../components/FlashcardList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const SwipePage = () => {
  const { deckId } = useParams(); // Get deckId from URL
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadedDeck = getDeckById(deckId);
    setDeck(loadedDeck);
    setLoading(false);
    // In a real app, you might fetch this data from an API
  }, [deckId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!deck) {
    return <Typography>Deck not found!</Typography>;
  }

  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      {" "}
      {/* Added margin top */}
      <Typography variant="h4" component="h1" gutterBottom>
        {deck.title} {/* Display deck title */}
      </Typography>
      {/* Use Grid to center the FlashcardList */}
      <Grid container justifyContent="center">
        {/* Pass the specific deck's cards to FlashcardList */}
        <FlashcardList cards={deck.cards} />
      </Grid>
    </Box>
  );
};

export default SwipePage;
