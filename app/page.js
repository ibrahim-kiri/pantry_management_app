"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase/config";
import PantryItem from "./components/PantryItem";
import AddItemForm from './components/AddItemForm';
import SearchBar from "./components/SearchBar";
import { Box, Grid } from "@mui/material";


const HomePage = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

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

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box>
            <SearchBar setSearchQuery={setSearchQuery} />
            <AddItemForm />
            <Grid container spacing={2} mt={2}>
                {filteredItems.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <PantryItem item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HomePage;