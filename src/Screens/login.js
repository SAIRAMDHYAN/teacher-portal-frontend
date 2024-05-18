import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Container, Typography, Button, FormControl, OutlinedInput, InputLabel } from '@mui/material';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please enter all fields.');
            return;
        }

        axios.post('http://localhost:3002/login', { email, password })
            .then(res => {
                const{token}=res.data
                if (token) {
                    // console.log(token); 
                    localStorage.setItem('token', token);
                    alert('Login Success');
                    navigate('/');
                }
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.error || 'Error logging in');
                } else if (error.request) {
                    alert('No response from server');
                } else {
                    alert('Error:', error.message);
                }
                console.log('Error config:', error.config);
                navigate('/login');
            });
    };
    return (
        <Container sx={{ bgcolor: '#cfd8dc', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box sx={{ alignItems: 'center' }}>
                <Typography variant='h4' align='center' sx={{ color: 'red' }} gutterBottom>
                    Login
                </Typography>
                <Box sx={{ bgcolor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5, height: '50vh', width: '80vh' }}>
                    <FormControl fullWidth margin="normal" sx={{ my: 3 }}>
                        <InputLabel htmlFor="email-input">E-mail</InputLabel>
                        <OutlinedInput
                            id="email-input"
                            name="email"
                            // value={email}
                            label="Email" 
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" sx={{ my: 3 }}>
                        <InputLabel htmlFor="password-input">Password</InputLabel>
                        <OutlinedInput
                            id="password-input"
                            name="password"
                            type="password"
                            // value={password}
                            label="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Box>New user? <Link to={'/register'}>Register</Link> </Box>
                    <Button variant="contained" color="dark" sx={{ minWidth: 200, my: 2 }} onClick={handleSubmit}>
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
