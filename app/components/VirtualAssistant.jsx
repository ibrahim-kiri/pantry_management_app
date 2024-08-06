"use client";

import React, { useState } from 'react'
import { Box, Button, Dialog, DialogContent, DialogTitle, Fab, IconButton, List, ListItem, ListItemText, TextField } from '@mui/material';
import { Chat as ChatIcon, Close as CloseIcon } from '@mui/icons-material';

const VirtualAssistant = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage('');
        }
    };

  return (
    <>
      <Fab
        color="primary"
        aria-label='virtual assistant'
        onClick={handleClickOpen}
        sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
        }}
      >
        <ChatIcon />
      </Fab>
      <Dialog 
        open={open} 
        onClose={handleClose}
        sx={{
            '& .MuiDialog-container': {
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
            },
            '& .MuiPaper-root': {
                margin: 0,
                marginBottom: '90px',
                marginRight: '20px',
                width: '400px',
                maxWidth: '100%',
            },
        }}
      >
        <DialogTitle>
            Pantry Assistant
            <hr />
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent>
            <h4>Hello! How can I assist you today?</h4>
            <Box sx={{ minHeight: '250px', display: 'flex', flexDirection: 'column'}}>
                <List sx={{ flexGrow: 1 }}>
                    {messages.map((message, index) => (
                        <ListItem key={index}>
                            <ListItemText 
                                primary={message.text}
                                secondary={message.sender === 'user' ? 'You' : 'Assistant'}
                            />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', mt: 2 }}>
                    <TextField 
                        variant='outlined'
                        placeholder='Type your message...'
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        sx={{ flexGrow: 1, mr: 1 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendMessage}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VirtualAssistant;
