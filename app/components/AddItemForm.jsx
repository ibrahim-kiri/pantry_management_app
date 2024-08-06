"use client";

import React, { useState } from 'react';
import { addDoc, collection, } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const AddItemForm = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = null;
            if (image) {
                const imageRef = ref(storage, `images/${image.name}`);
                const snapshot = await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(snapshot.ref);
                console.log('image uploaded to:', imageUrl);
            }

            const docRef = await addDoc(collection(db, 'pantryItems'), {
                name,
                quantity: parseInt(quantity),
                imageUrl,
            });
            console.log('Document written with ID:', docRef.id);

            setName('');
            setQuantity('');
            setImage(null);
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            console.log('image selected:', e.target.files[0]);
        }
    };

  return (
    <Paper
        elevation={3} 
        sx={{ 
            padding: 3, 
            mb: 3,
            borderRadius: '12px',
        }}
    >
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
            <Typography sx={{ color: 'black', fontSize: '20px', fontFamily: 'Poppins' }} gutterBottom>
                Add Pantry Item
            </Typography>

            <TextField
                label="Item Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                    style: {
                        borderRadius: '12px',
                    },
                }}
                required
            />
                    
            <TextField 
                type="number"
                label="Quantity"
                variant="outlined"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                fullWidth
                sx={{ mb: 2 }}
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
                id='icon-button-file' 
                type="file" 
                onChange={handleImageChange} 
            />
            <label htmlFor='icon-button-file'>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
                Upload Image
            </label>
            <Button variant="contained" color="primary" type="submit">
                Add Item
            </Button>
        </Box>
    </Paper>
  );
}

export default AddItemForm;
