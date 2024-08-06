"use client";

import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, IconButton, TextField } from '@mui/material';
import { Chat as ChatIcon, Close as CloseIcon } from '@mui/icons-material';

const VirtualAssistant = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState([]);
    const [conversation, setConversation] = useState([
        { sender: 'assistant', text: 'Hi! I am your pantry assistant. How can I help you?' }
    ]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setConversation([...conversation, { sender: 'user', text: message }]);
            setMessage('');
            setTimeout(() => {
                setConversation((prevConversation) => [
                    ...prevConversation,
                    { sender: 'assistant', text: 'Got it! What else can I do for you?' }
                ]);
            }, 1000);
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
                borderRadius: '12px'
            },
        }}
      >
        <DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    backgroundColor: 'blue',
                    color: 'white',
                    borderRadius: '50%',
                    padding: 1,
                    width: 20,
                    height: 20,
                    '&:hover': {
                        backgroundColor: 'darkblue',
                    },
                }}
            >
                <CloseIcon sx={{ fontSize: 18 }} />
            </IconButton>
        </DialogTitle>
        <DialogContent dividers>
            <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: 1,
                    minHeight: '300px', 
                    overflowY: 'auto',
                }}
            >
                {conversation.map((msg, index) => (
                    <Box
                        key={index}
                        sx={{
                            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            backgroundColor: msg.sender === 'user' ? 'primary.light' : 'grey.300',
                            color: msg.sender === 'user' ? 'white' : 'black',
                            padding: 1,
                            borderRadius: 1,
                            maxWidth: '80%',
                        }}
                    >
                        {msg.text}
                    </Box>
                ))}
            </Box>
        </DialogContent>
        <DialogActions>
            <TextField 
                variant='outlined'
                size='small'
                fullWidth
                placeholder='Type a message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress = {(e) => {
                    if (e.key === 'Enter') {
                        handleSendMessage();
                    }
                }}
                InputProps={{
                    sx: {
                        borderRadius: 2,
                    }
                }}
            />
            <Button
                onClick={handleSendMessage}
                sx={{
                    marginLeft: 1,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                }}
            >
                Send
            </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VirtualAssistant;
