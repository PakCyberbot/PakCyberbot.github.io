import React, { useEffect, useState } from 'react';
import "./content.css";

function MyContentList({category}) {
  const [contentLinks, setContentLinks] = useState([]);

  useEffect(() => {
    const readmeUrl = 'https://raw.githubusercontent.com/PakCyberbot/PakCyberbot/main/README.md';
    fetch(readmeUrl)
      .then((response) => response.text())
      .then((markdownText) => {
        var startMarker;
        var endMarker;
        if(category == "youtube"){
          startMarker = '<!-- YOUTUBE:START -->';
          endMarker = '<!-- YOUTUBE:END -->';
        }
        else{
          startMarker = '<!-- BLOG-POST-LIST:START -->';
          endMarker = '<!-- BLOG-POST-LIST:END -->';
        }
        
        const startIndex = markdownText.indexOf(startMarker);
        const endIndex = markdownText.indexOf(endMarker);

        if (startIndex !== -1 && endIndex !== -1) {
          const relevantText = markdownText.substring(startIndex + startMarker.length, endIndex);
          
          // Regular expression to match Markdown links
          const linkPattern = /\[([^\]]+)\]\((https:\/\/[^)]+)\)/g;

          // Extract links from the relevant text
          const links = [];
          let match;
          while ((match = linkPattern.exec(relevantText)) !== null) {
            links.push({ title: match[1], url: match[2] });
          }

          setContentLinks(links);
        }
      })
      .catch((error) => {
        console.error('Error fetching and parsing README:', error);
      });
  }, []);

  return (
    <div className='latestcontents'>
      {category == 'youtube' ? 
        <h1>Latest YouTube Videos</h1>
        :
        <h1>Latest Medium Articles</h1>
      }
      <ul>
        {contentLinks.map((link, index) => (
          <li key={index} >
            <a href={link.url} target="_blank" rel="noopener noreferrer" className='contentlist'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyContentList;
