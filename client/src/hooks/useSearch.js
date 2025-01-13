import { useState, useEffect, useCallback } from 'react';
import fetchMarkdownContent from '../utils/fetchMarkdownContent'; // Assuming fetchMarkdownContent is defined elsewhere

export const useSearch = () => {
    const [sections, setSections] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const manualContent = await fetchMarkdownContent('userManual.md');
                const parsedSections = manualContent.split(/(?=^##\s)/m).map((section) => {
                    const heading = section.split('\n')[0]; // Get first line as heading
                    const subsections = section.split(/(?=^###\s)/m); // Split subsections
                    return { heading, subsections };
                });
                setSections(parsedSections);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching markdown content:', err);
                setError('Failed to load manual content.');
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = useCallback((query) => {
        if (!sections.length || !query) return;

        const results = sections
            .flatMap((section, index) =>
                section.subsections.map((subsection, subsectionIndex) => ({
                    content: subsection,
                    name: `${section.heading.replace(/#/g, '')} - ${subsection.split('\n')[0].replace(/#/g, '')}`,
                    url: `/section/${index}#subsection-${subsectionIndex-1}`,
                }))
            )
            .filter(({ content }) => content.toLowerCase().includes(query.toLowerCase()));

        setSearchResults(results);
    }, [sections]);

    return { handleSearch, searchResults, error, isLoading };
};
