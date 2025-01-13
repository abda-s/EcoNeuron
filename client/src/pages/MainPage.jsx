import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchMarkdownContent from '../utils/fetchMarkdownContent';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import { Box, useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SectionButton from '../components/SectionButton';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const MainPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [sections, setSections] = useState([]); // Store sections
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMD = async () => {
            try {
                // Fetch markdown content from the file
                const manualContent = await fetchMarkdownContent('userManual.md');

                // Split content into sections based on level-2 headings, keeping the heading
                const parsedSections = manualContent.split(/(?=^##\s)/m);

                // Extract headings, descriptions, icons, and content, including subsections
                const sectionsWithHeadings = parsedSections.map((section) => {
                    // Get first line as heading
                    const lines = section.split('\n');
                    const heading = lines[0].replace(/^##\s*/, '');

                    // Extract description if it exists
                    let description = '';
                    const descriptionMatch = section.match(/!!!\[(.*?)\]!!!/);
                    if (descriptionMatch) {
                        description = descriptionMatch[1];
                    }

                    // Extract icon if it exists
                    let icon = '';
                    const iconMatch = section.match(/---\[(.*?)\]---/);
                    console.log(iconMatch);

                    if (iconMatch) {
                        icon = iconMatch[1];
                    }

                    // Get content after removing heading, description, and icon
                    let content = section
                        .replace(/!!!\[.*?\]!!!/, '')
                        .replace(/---\[.*?\]---/, '')
                        .trim();

                    // Split subsections based on level-3 headings
                    const subsections = content.split(/(?=^###\s)/m);

                    console.log("Heading:", heading);
                    console.log("Icon:", icon);

                    return {
                        heading,
                        description,
                        icon,
                        subsections
                    };
                });

                setSections(sectionsWithHeadings);
            } catch (err) {
                console.error('Error fetching markdown content:', err);
                setError('Failed to load manual content.');
            }
        };

        fetchMD();
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <NavBar />
            <Box
                sx={{
                    height: "50vh",
                    width: "100%",
                    justifyContent:"center",
                    alignItems: "center",
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: "50vh",
                        margin: "auto",
                        width: isMobile ? "90%" : "50%",
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        align="center"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        User Manual
                    </Typography>
                    <SearchBar />
                </Box>
            </Box>


            <Box sx={{ width: "100%", height: "50vh", alignItems: 'center', justifyContent: 'center',mt:2 }}>
                {error && <Typography color="error">{error}</Typography>}
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                >
                    Topics
                </Typography>
                {sections.length > 0 ? (
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry>
                            {sections.map((section, index) => (
                                <SectionButton
                                    key={index}
                                    sectionHeading={section.heading}
                                    sectionDescription={section.description}
                                    sectionIcon={section.icon}
                                    index={index}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                ) : (
                    <Typography align="center">Loading sections...</Typography>
                )}
            </Box>
        </Box>
    );
};

export default MainPage;