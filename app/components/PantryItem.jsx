"use client";

import { useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, IconButton, Typography } from"@mui/material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import EditItemForm from "./EditItemForm";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const PantryItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        await deleteDoc(doc(db, 'pantryItems', item.id));
    };

    const handleUpdateQuantity = async (amount) => {
        const itemRef = doc(db, 'pantryItems', item.id);
        await updateDoc(itemRef, { quantity: item.quantity + amount });
    };

    const handleEditOpen = () => {
        setOpen(true);
    }

    const handleEditClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Card sx={{ maxWidth: 400, m: 1, boxShadow: 3, borderRadius: 2 }}>
                {item.imageUrl && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.imageUrl}
                        alt={item.name}
                    />
                )}
                <CardContent>
                    <Typography sx={{ color: 'blue', fontSize: '18px', fontFamily: 'Poppins' }} gutterBottom><b>{item.name}</b></Typography>
                    <Typography sx={{ color: 'green', fontFamily: 'Poppins'}}>Quantity: {item.quantity}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" onClick={() => handleUpdateQuantity(1)}>
                        <AddIcon />
                    </Button>
                    <Button size="medium" onClick={() => handleUpdateQuantity(-1)}>
                        <RemoveIcon />
                    </Button>
                    <IconButton size="small" onClick={handleEditOpen}>
                        <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={handleDelete} sx={{ padding: '6px' }}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={handleEditClose}>
                <EditItemForm item={item} handleEditClose={handleEditClose} />
            </Dialog>
        </>
    );
};

export default PantryItem;