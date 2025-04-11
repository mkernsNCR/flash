import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { sampleDecks } from "../data/decks";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const DecksPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Flashcard Decks
      </Typography>
      <Grid container spacing={3}>
        {sampleDecks.map((deck) => (
          <Grid item key={deck.id} xs={12} sm={6} md={4}>
            <CardActionArea
              component={RouterLink}
              to={`/deck/${deck.id}`}
              sx={{ height: "100%", display: "flex" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {deck.title}
                  </Typography>
                  <Typography>{deck.description}</Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DecksPage;
