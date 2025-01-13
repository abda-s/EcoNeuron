import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch'; // Import the custom hook
import NavBar from '../components/NavBar';
import { Box, CircularProgress, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';

const SearchResultsPage = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();

    // Use the custom hook
    const { handleSearch, searchResults, isLoading, error } = useSearch();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('query');

        if (query) {
            handleSearch(query);
        }
    }, [location.search, handleSearch]); // Add handleSearch to dependencies

    useEffect(() => {
        setResults(searchResults);
    }, [searchResults]);

    return (
        <Box >
            <NavBar />
            <Box sx={{ display: 'flex', flexDirection: "column",px: 3 }}>
                <SearchBar />
                <Typography sx={{ mt: 2 }} variant="h4">Search Results for {new URLSearchParams(location.search).get('query')}</Typography>
                {error && <Typography variant="body1" color="error">Error: {error}</Typography>}

                {isLoading ? (
                    <CircularProgress />
                ) : results.length > 0 ? (
                    <List>
                        {results.map((result) => (
                            result.name && (
                                <ListItem sx={{ p: 0, borderBottom: '1px solid #ccc' }} key={result.name}>
                                    <ListItemButton component="a" href={result.url} >
                                        <ListItemText primary={result.name} />
                                    </ListItemButton>
                                </ListItem>
                            ) 
                        ))}
                    </List>
                ) : (
                    <Typography variant="body1">No results found.</Typography>
                )}
            </Box>

        </Box>
    );
};

export default SearchResultsPage;
