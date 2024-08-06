"use client";

import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearchQuery }) => {

    return (
        <Box my={2} display="flex" justifyContent="center">
            <TextField
                fullWidth
                label="Search"
                variant="outlined"
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ width: '300px', borderColor: '#f9f9f9', }}
                InputProps={{
                    style: {
                        color: '#f9f9f9',
                    },
                    
                    endAdornment: (
                        <InputAdornment position="start" color="white">
                            <SearchIcon 
                                style={{
                                    color: 'white'
                                }}
                            />
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    );
};

export default SearchBar;