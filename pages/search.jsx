"use client";

import { useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import Header from "@/components/Header";
import { Button, Container, Grid } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import PantryItem from "@/components/PantryItem";


const SearchPage = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        const q = query(collection(db, 'pantryItems'), where('name', '==', searchQuery));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const itemsArray = [];
            querySnapshot.forEach((doc) => {
                itemsArray.push({ id: doc.id, ...doc.data() });
            });
            setItems(itemsArray);
        });
        return () => unsubscribe();
    };
    return (
        <div>
            <Header />
            <Container>
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <Button onClick={handleSearch} variant="contained" color="primary">
                    Search
                </Button>
                <Grid container spacing={3}>
                    {items.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <PantryItem />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default SearchPage;