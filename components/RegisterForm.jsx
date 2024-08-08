"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthProvider";
import { Box, Button, Container, Link, Paper, TextField, Typography } from "@mui/material";


const RegisterForm = () => {
    const { register } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            await register(email, password);
            router.push("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        // <Container maxWidth="sm">
        //     <Paper elevation={3} style={{ padding: "2em", marginTop: "2em"}}>
        //         <form onSubmit={handleRegister}>
        //             <TextField 
        //                 label="Email"
        //                 variant="outlined"
        //                 type="email"
        //                 fullWidth
        //                 margin="normal"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 required
        //             />
        //             <TextField 
        //                 label="Password"
        //                 variant="outlined"
        //                 type="password"
        //                 fullWidth
        //                 margin="normal"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 required
        //             />
        //             <Button
        //                 type="submit"
        //                 variant="contained"
        //                 color="primary"
        //                 style={{ marginTop: "1em"}}
        //             >
        //                 Register
        //             </Button>
        //         </form>
                
        //     </Paper>
        // </Container>
        
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
                    Register
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
                        onSubmit={(e) => { e.preventDefault(); handleRegister(); }}
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
                            Register
                        </Button>
                    </Box>
                    <Typography sx={{ fontFamily: 'Poppins' }} variant="body2" align="center" mt={2}>
                        Already have an account? <Link href="/login">Login here</Link>
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default RegisterForm;