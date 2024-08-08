"use client";

import { Container, Typography } from "@mui/material";
import RegisterForm from "@/components/RegisterForm";


const RegisterPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <RegisterForm /> 
        </Container>
    ); 
};

export default RegisterPage;