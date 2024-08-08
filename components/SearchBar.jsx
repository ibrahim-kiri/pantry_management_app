"use client";

import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, onChange }) => {

    return (
        <Box my={2} display="flex" justifyContent="center">
            <TextField
                value={value}
                fullWidth
                label="Search"
                variant="outlined"
                onChange={(e) => onChange(e.target.value)}
                sx={{ width: '300px', fontFamily: 'Poppins', color: 'white' }}
                InputProps={{
                    style: {
                        borderRadius: '12px',
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