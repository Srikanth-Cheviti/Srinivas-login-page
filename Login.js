// src/Login.js
import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" fullWidth margin="normal" type="password" />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
