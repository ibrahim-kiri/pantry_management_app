"use client";

import React from 'react';
import { AppBar, Box, Toolbar, Typography } from "@mui/material";


const Header = () => (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, zIndex: 1200 }}>
        <Toolbar>
            <Box 
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Typography variant="h6" component="div">
                    <h4>Pantry Management App</h4>
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
);

export default Header;