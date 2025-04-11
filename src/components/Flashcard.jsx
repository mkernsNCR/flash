import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Flashcard = ({ question, answer, showAnswer }) => {
  const cardSx = {
    position: "relative",
    overflow: "hidden",
    margin: "0",
    width: { xs: "80vw", sm: "70vw", md: "60vw" },
    maxWidth: "400px",
    height: { xs: "70vh", sm: "65vh", md: "60vh" },
    maxHeight: "550px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    borderRadius: 3,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    border: "2px solid",
    borderColor: "success.main",
  };

  return (
    <Card sx={cardSx}>
      <CardContent
        sx={{
          position: "relative",
          padding: 2,
          color: "text.primary",
          textAlign: "center",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {question}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            opacity: showAnswer ? 1 : 0,
            transform: showAnswer ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {answer}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Flashcard;
