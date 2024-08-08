"use client";

import { useState } from "react";
import { Button, Container, Paper, TextField, Typography, Link, Box } from "@mui/material";
import { useAuth } from "../context/AuthProvider";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const router = useRouter();
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            await login(email, password);
            router.push("/");
        } catch (error) {
            setError("Failed to log in. Please check your credentials.");
            console.error("Error logging in:", error);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    '& .MuiTextField-root': { m: 1 },
                    '& .MuiButtonBase-root': { m: 1 },
                }}
            >
                <Typography sx={{ fontFamily: 'Poppins', mb: 2, color: 'orange' }}  variant="h4" gutterBottom align="center">
                    Pantry Organizer
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', mb: 3, color: 'dark-gray' }}  variant="body1" gutterBottom align="center">
                    "Manage your pantry items efficiently and effectively."
                </Typography> 
                <Paper 
                    elevation={6}
                    sx={{ 
                        padding: 3, 
                        borderRadius: '12px',
                        width: '100%',
                        maxWidth: '400px',
                    }}
                >
                    {error && <Typography color="error">{error}</Typography>}
                    <Box 
                        component="form"
                        onSubmit={(e) => { e.preventDefault(); handleLogin(); }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& .MuiTextField-root': { mb: 2 },
                            '& .MuiButtonBase-root': { m: 2, fontFamily: 'Poppins' },
                        }}
                    >
                        <TextField 
                            variant="outlined"
                            type="email"
                            label="Email"
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                },
                            }}
                            required
                            
                        />
                        <TextField 
                            label="Password"
                            variant="outlined"
                            type="password"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                },
                            }}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ mt: 2, fontFamily: 'Poppins' }}
                        >
                            Login
                        </Button>
                    </Box>
                    <Typography sx={{ fontFamily: 'Poppins' }} variant="body2" align="center" mt={2}>
                        Don't have an account? <Link href="/register">Register here</Link>
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default LoginPage;