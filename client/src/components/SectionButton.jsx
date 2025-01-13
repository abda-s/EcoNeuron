import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function SectionButton({ sectionHeading, sectionDescription, sectionIcon, index }) {
    const navigate = useNavigate();

    return (
        <Box onClick={() => navigate(`/section/${index}`)} sx={{ cursor: 'pointer', border: '1px solid #ccc', p:4, m:2, borderRadius: '5px', textAlign:"left",display: 'flex', flexDirection: 'column', gap: 1 }} className="section-button" >
            <Box dangerouslySetInnerHTML={{ __html: sectionIcon }} />
            <Typography variant="h6" sx={{ cursor: 'pointer' }} >{sectionHeading}</Typography>
            <Typography variant="body1" sx={{ cursor: 'pointer' }} >{sectionDescription}</Typography>
        </Box>
    )
}

export default SectionButton