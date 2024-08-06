"use client";

import "./styles/globals.css";
import { Box, Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import VirtualAssistant from "./components/VirtualAssistant";

const Layout = ({ children }) => {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pantry Management App</title>
            </head>
            <body>
                <CssBaseline />
                <Header />
                <div id="background"></div>
                <main style={{ marginTop: '64px', padding: '20px'}}>
                    <Container maxWidth="md">
                        <Box my={4}>
                            {children}
                        </Box>
                        <VirtualAssistant />
                    </Container>
                </main>
            </body>
        </html>
    );
};

export default Layout;