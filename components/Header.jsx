"use client";

import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAuth } from '../context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Header = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    return (

        <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, zIndex: 1200 }}>
            <Toolbar>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Box 
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "left",
                        }}
                    >
                        <Typography sx={{fontFamily: 'Poppins' }} variant="h6">
                            <h3>Pantry Organizer</h3>
                        </Typography>  
                    </Box>
                    <Box
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            marginLeft: 'auto'
                        }}
                    >
                        <Typography
                            className='welcome'
                            sx={{
                                marginRight: 2,
                                fontFamily: 'Poppins',
                                fontSize: 14,
                            }}
                        >
                            Welcome, {user ? user.email : "Guest"}
                        </Typography>
                        {user ? (
                            <Button sx={{ color: 'white', fontSize: '18px', fontFamily: 'Poppins' }} onClick={logout}>
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Link color="inherit" href="/login">
                                    Login
                                </Link>
                                <Link color="inherit" href="/register">
                                    Register
                                </Link>
                            </>
                        )}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );

};

export default Header;