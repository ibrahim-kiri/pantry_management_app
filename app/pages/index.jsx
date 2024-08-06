"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";
import PantryItem from "../components/PantryItem";
import AddItemForm from "../components/AddItemForm";
import SearchBar from "../components/SearchBar";
import { Box, Grid, Typography } from "@mui/material";

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'pantryItems'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const itemsArray = [];
            querySnapshot.forEach((doc) => {
                itemsArray.push({ id: doc.id, ...doc.data() });
            });
            setItems(itemsArray);
        });
        return () => unsubscribe();
    }, []);

    const filteredItems = items.filter(items =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box>
            <SearchBar value={search} onChange={setSearch} />
            <AddItemForm />
            <Box textAlign="center" mb={4} p={2} borderRadius={1}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Pantry Items
                </Typography>
            </Box>
            <Grid container spacing={2} mt={2}>
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <PantryItem item={item} />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" component="p" gutterBottom>
                        No items found. Add some to your pantry!
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};

export default HomePage;