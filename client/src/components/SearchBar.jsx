import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search-results?query=${searchQuery}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                gap: 1, // spacing between input and button
                mt: 2, // margin top
            }}
        >
            {/* Search input */}
            <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown} // Listen for Enter key press
                size="small"
                fullWidth
            />
            
            {/* Search button */}
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    );
}

export default SearchBar;
