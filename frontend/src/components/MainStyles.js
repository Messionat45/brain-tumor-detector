import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(to bottom right, #e0f7fa, #fff);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const TopRightNav = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  .hamburger {
    display: none;
    font-size: 1.8rem;
    cursor: pointer;
    user-select: none;
    margin-right: 1rem;
  }

  .menu {
    display: flex;
    gap: 0.5rem;
  }

  .menu.mobile {
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    flex-direction: column;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  @media (max-width: 900px) {
    .hamburger {
      display: block;
    }

    .menu {
      display: none;
    }

    .menu.mobile {
      display: flex;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0d47a1;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const UploadSection = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const PredictionCard = styled.div`
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  background-color: ${(props) => (props.isPositive ? "#e8f5e9" : "#ffebee")};
  border: 2px solid ${(props) => (props.isPositive ? "#43a047" : "#e53935")};
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.isPositive ? "#1b5e20" : "#b71c1c")};
  width: fit-content;
  max-width: 80%;
  min-width: 200px;

  @media (max-width: 600px) {
    padding: 1rem;
    font-size: 0.95rem;
    width: 100%;
  }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1976d2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
  margin-top: 1rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }
`;

// Updated styles for the Button component
export const Button = styled.button`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    font-size: 0.9em;
    padding: 0.2em 0.8em;
    margin: 0.5em;
  }
`;
