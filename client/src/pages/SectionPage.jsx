import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMarkdownContent from '../utils/fetchMarkdownContent';
import NavBar from '../components/NavBar';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import StyledMarkdown from '../components/StyledMarkdown';


const SectionPage = () => {
  const { sectionId } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const manualContent = await fetchMarkdownContent('../userManual.md'); // Adjust path if needed
        const sections = manualContent.split(/(?=^##\s)/m); // Split sections by ## heading
        const selectedContent = sections[parseInt(sectionId, 10)];

        if (selectedContent) {
          // Process content and add custom ids to the h3 headings
          const processedContent = addCustomIdsToHeadings(selectedContent);
          setContent(processedContent.replace(/!!!\[.*?\]!!!/, '').replace(/---\[.*?\]---/, ''));
        } else {
          setContent('Section not found.');
        }
      } catch (err) {
        console.error('Error fetching section content:', err);
        setError('Failed to load section content.');
      }
    };

    fetchSection();
  }, [sectionId]);

  // Scroll to the specific subsection based on the URL hash after content is loaded
  useEffect(() => {
    // Check for a hash in the URL (e.g., #subsection-4)
    const hash = window.location.hash;
    if (hash) {
      // Remove the leading '#' and try to find the element with the corresponding ID
      const targetElement = document.getElementById(hash.slice(1)); // Get the element without the '#' symbol
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sectionId, content]); // This effect runs when sectionId or content changes

  // Function to add custom ids to only ### (h3) headings
  const addCustomIdsToHeadings = (content) => {
    let index = 0;  // Track the index of each h3 heading
    return content.replace(/^###\s(.*?)(\n|$)/gm, (match, heading) => {
      const id = index++;  // Create a custom id based on index
      return `<h3 id="subsection-${id}">${heading}</h3>`; // Add id to h3
    });
  };

  return (
    <div>
      <NavBar />
      {error ? (
        <p>{error}</p>
      ) : (
        // Use ReactMarkdown with rehypeRaw to render HTML content
        <Box sx={{ mx: isMobile ? 2 : "auto" }}>
          <StyledMarkdown content={content} />
        </Box>

      )}
    </div>
  );
};

export default SectionPage;
