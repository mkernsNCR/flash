export const sampleDecks = [
  {
    id: "react-basics",
    title: "React Basics",
    description: "Fundamental concepts of React library.",
    cards: [
      {
        question: "What is React?",
        answer: "A JavaScript library for building user interfaces.",
      },
      {
        question: "What is JSX?",
        answer:
          "A syntax extension for JavaScript, used with React to describe UI.",
      },
      {
        question: "What is a Component?",
        answer: "Reusable, independent pieces of UI.",
      },
      {
        question: "What is State?",
        answer: "Data that changes over time within a component.",
      },
      {
        question: "What are Props?",
        answer:
          "Data passed down from a parent component to a child component.",
      },
    ],
  },
  {
    id: "javascript-es6",
    title: "JavaScript ES6+",
    description: "Features introduced in ECMAScript 2015 and later.",
    cards: [
      {
        question: "What is `let` and `const`?",
        answer: "Block-scoped variable declarations.",
      },
      {
        question: "What are Arrow Functions?",
        answer: "A concise syntax for writing function expressions.",
      },
      {
        question: "What are Promises?",
        answer:
          "Objects representing the eventual completion or failure of an async operation.",
      },
      {
        question: "What is Destructuring?",
        answer:
          "Syntax to unpack values from arrays or properties from objects.",
      },
    ],
  },
  // Add more decks here
];

// Helper function to get a specific deck by ID
export const getDeckById = (id) => {
  return sampleDecks.find((deck) => deck.id === id);
};
