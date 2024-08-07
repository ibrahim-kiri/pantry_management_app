"use client";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firestore";
import Header from "../components/Header";
import { Button, Container, Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";
import PantryItem from "../components/PantryItem";


const SearchPage = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        const q = query(collection(db, 'pantryItems'), where('name', '==', search));
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
                <SearchBar value={search} onChange={setSearch} />
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