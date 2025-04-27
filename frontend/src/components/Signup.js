import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import { Button } from "./StyleComponent";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PREDICT_URL = process.env.REACT_APP_PREDICT_URL;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        const response = await axios.post(`${BASE_URL}/api/signup`, {
          username,
          password,
        });
        console.log(response);
        navigate("/login");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        }
      }
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Signup
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <MuiButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: 1 }}
            >
              SIGN UP
            </MuiButton>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
