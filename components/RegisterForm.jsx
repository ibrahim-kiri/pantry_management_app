"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthProvider";
import { Button, Container, Link, Paper, TextField, Typography } from "@mui/material";


const RegisterForm = () => {
    const { register } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            router.push("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: "2em", marginTop: "2em"}}>
                <form onSubmit={handleRegister}>
                    <TextField 
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField 
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "1em"}}
                    >
                        Register
                    </Button>
                </form>
                {error && <Typography color="error">{error}</Typography>}
                <Typography variant="body2" align="center" mt={2}>
                    Already have an account? <Link href="/login">Login here</Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default RegisterForm;