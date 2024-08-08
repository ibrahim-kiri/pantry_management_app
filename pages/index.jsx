"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import AddItemForm from "@/components/AddItemForm";
import PantryItem from "@/components/PantryItem";
import SearchBar from "@/components/SearchBar";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useAuth } from "@/context/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import Header from "@/components/Header";

const HomePage = () => {
    const { user, logout } = useAuth();
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (user) {
            const q = query(collection(db, 'pantryItems'), where('userId', '==', user.uid));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const itemsArray = [];
                querySnapshot.forEach((doc) => {
                    itemsArray.push({ id: doc.id, ...doc.data() });
                });
                setItems(itemsArray);
            });
            return () => unsubscribe();
        }
    }, [user]);

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <ProtectedRoute>
            <Header />
            <main style={{ marginTop: '64px', padding: '20px'}}>
                <Container maxWidth="md">
                    {user ? (
                        <>
                            <Box>
                                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                                <AddItemForm />
                                <Box textAlign="center" mt={3} pt={2}>
                                    <Typography sx={{ color: 'white', fontSize: '24px', fontFamily: 'Poppins' }} component="h2" gutterBottom>
                                        Pantry Items
                                    </Typography>
                                </Box>
                                <hr />
                                <Grid container spacing={2} mt={1}>
                                    {filteredItems.length > 0 ? (
                                        filteredItems.map(item => (
                                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                                <PantryItem item={item} />
                                            </Grid>
                                        ))
                                    ) : (
                                        <Typography sx={{ color: 'white', fontSize: '16px', fontFamily: 'Poppins', alignItems: 'center' }} gutterBottom>
                                            No items found. Add some to your pantry!
                                        </Typography>
                                    )}
                                </Grid>
                            </Box>
                        </>
                    ) : (
                        <Typography>Please log in to access more features.</Typography>
                    )}
                </Container>
            </main>
        </ProtectedRoute>
    );
};

export default HomePage;