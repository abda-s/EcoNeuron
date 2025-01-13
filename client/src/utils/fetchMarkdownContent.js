const fetchMarkdownContent = async (filePath) => {
    
    try {
      const response = await fetch(filePath);

      if (!response.ok) throw new Error('Failed to load markdown file');
      const markdownContent = await response.text();

      return markdownContent;
    } catch (error) {
      console.error('Error fetching markdown file:', error);
      throw error;
    }
  };
  
  export default fetchMarkdownContent;
  