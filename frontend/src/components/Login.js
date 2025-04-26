import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Button as MuiButton,
} from "@mui/material";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        const response = await axios.post(`${BASE_URL}/api/login`, {
          username,
          password,
        });
        console.log(response);
        if (response.status === 200) {
          navigate("/Main");
        }
      } catch (error) {
        console.log(error);
        alert("Please check your details");
      }
    } else {
      alert("Please fill all fields");
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
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="User Name"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <MuiButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </MuiButton>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
