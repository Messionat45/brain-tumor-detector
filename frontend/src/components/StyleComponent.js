import styled from "styled-components";

// Unified theme colors
const primaryColor = "#1565c0"; // Deep Blue
const secondaryColor = "#e3f2fd"; // Light Blue
const accentColor = "#1976d2"; // Slightly brighter blue
const neutralText = "#333";

// General Button
export const Button = styled.button`
  background: ${(props) => (props.$primary ? primaryColor : "white")};
  color: ${(props) => (props.$primary ? "white" : primaryColor)};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em 1.5em;
  border: 2px solid ${primaryColor};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.$primary ? "#0d47a1" : secondaryColor)};
  }
`;

// Optional secondary button if needed
export const TomatoButton = styled(Button)`
  background: ${accentColor};
  color: white;
  border-color: ${accentColor};

  &:hover {
    background: #0d47a1;
  }
`;
