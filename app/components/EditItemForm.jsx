"use client";

import React, { useState } from 'react'
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Paper, TextField } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { PhotoCamera } from '@mui/icons-material';

const EditItemForm = ({ item, handleEditClose }) => {
    const [name, setName] = useState(item.name);
    const [quantity, setQuantity] = useState(item.quantity);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const itemRef = doc(db, 'pantryItems', item.id);
        const updatedItem = {
            name,
            quantity: parseInt(quantity),
        };
        if (image) {
            updatedItem.imageUrl = URL.createObjectURL(image);
        }
        await updateDoc(itemRef, updatedItem);
        handleEditClose();
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        };
    }

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <DialogTitle sx={{ color: 'blue', fontSize: '18px', fontFamily: 'Poppins' }}>Edit Pantry Item</DialogTitle>
        <DialogContent>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& .MuiTextField-root': { m: 1, width: '300px' },
                    '& .MuiButtonBase-root': { m: 1 }
                }}
            >
                <TextField 
                    label="Item Name"
                    variant='outlined'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                        style: {
                            borderRadius: '12px',
                        },
                    }}
                    required
                />

                <TextField 
                    label="Quantity"
                    variant='outlined'
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    InputProps={{
                        style: {
                            borderRadius: '12px',
                        },
                    }}
                    required
                />

                <input 
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="edit-icon-button-file"
                    type="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="edit-icon-button-file">
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <PhotoCamera />
                    </IconButton>
                    Upload Image
                </label>

                <DialogActions>
                    <Button sx={{fontFamily: 'Poppins' }} variant='contained' onClick={handleEditClose} color="error">
                        Cancel
                    </Button>
                    <Button sx={{fontFamily: 'Poppins' }} variant='contained' color="primary" type="submit">
                        Save
                    </Button>
                </DialogActions>
            </Box>
        </DialogContent>
    </Paper>
        
  );
};

export default EditItemForm;
