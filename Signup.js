// src/Signup.js
import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Signup = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" fullWidth margin="normal" type="password" />
        <Button variant="contained" color="primary" fullWidth>
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
