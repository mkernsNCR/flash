import React, { useState, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import Flashcard from "./Flashcard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FlashcardList = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
    setShowAnswer(false);
    setIsFading(false);
  }, [currentIndex]);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
  };

  const handleFlip = () => {
    setShowAnswer((prev) => !prev);
  };

  const canSwipe = currentIndex >= 0 && currentIndex < cards.length;

  const goToPreviousCard = () => {
    if (!canSwipe) return;
    const nextIndex = currentIndexRef.current + 1;
    updateCurrentIndex(nextIndex % cards.length);
  };

  const goToNextCard = () => {
    if (!canSwipe) return;
    setIsFading(true);
    setTimeout(() => {
      const nextIndex = currentIndexRef.current - 1;
      updateCurrentIndex(nextIndex < 0 ? cards.length - 1 : nextIndex);
    }, 150);
  };

  const handleSwipe = (direction) => {
    if (!canSwipe) return;
    console.log(
      cards[currentIndexRef.current]?.question + " swiped: " + direction
    );
    setIsFading(true);
    setTimeout(() => {
      const nextIndex = currentIndexRef.current - 1;
      updateCurrentIndex(nextIndex < 0 ? cards.length - 1 : nextIndex);
    }, 150);
  };

  const mainContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  const cardContainerSx = {
    position: "relative",
    marginTop: "1rem",
    height: { xs: "75vh", sm: "70vh", md: "65vh" },
    maxHeight: "600px",
    width: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonContainerSx = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    maxWidth: "450px",
    padding: "1rem 0",
  };

  return (
    <Box sx={mainContainerSx}>
      <Box sx={cardContainerSx}>
        {canSwipe ? (
          <TinderCard
            key={currentIndex}
            onSwipe={handleSwipe}
            preventSwipe={["up", "down"]}
            swipeRequirementType="position"
            className={`flashcard-tinder ${
              isFading ? "flashcard-tinder-fadeout" : ""
            }`}
          >
            <Flashcard
              question={cards[currentIndex].question}
              answer={cards[currentIndex].answer}
              showAnswer={showAnswer}
            />
          </TinderCard>
        ) : (
          <Typography variant="h5" color="textSecondary">
            {cards.length === 0 ? "No cards loaded." : "Finished!"}
          </Typography>
        )}
      </Box>

      {canSwipe && (
        <Box sx={buttonContainerSx}>
          <IconButton
            aria-label="previous card"
            onClick={goToPreviousCard}
            sx={{
              border: "1px solid",
              borderColor: "success.main",
              color: "success.main",
              width: 48,
              height: 48,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            aria-label="flip card"
            onClick={handleFlip}
            sx={{
              border: "1px solid",
              borderColor: "success.main",
              color: "success.main",
              width: 56,
              height: 56,
            }}
          >
            {showAnswer ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>

          <IconButton
            aria-label="next card"
            onClick={goToNextCard}
            sx={{
              border: "1px solid",
              borderColor: "success.main",
              color: "success.main",
              width: 48,
              height: 48,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default FlashcardList;
