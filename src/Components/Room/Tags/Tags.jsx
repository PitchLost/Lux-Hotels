import React, { useContext, useState } from 'react';
import './Tags.css'

import { DarkContext } from '../../../App';

function Tags({setSelectedTag}) {

    const [darkMode, setDarkMode] = useContext(DarkContext) // Get the DarkMode state from DarkContext
    const tagsClass = darkMode ? 'tags-dark':'tags-light' // Set the class names for dark mode and light mode

    // Defined the tags. More can be added as needed but will also need updating in rooms.jsx
    
    const tags = [ 
        {label: 'Premium', filter: 'prem'},
        {label: 'Economy+', filter: 'eco2'},
        {label: 'Economy', filter: 'eco'},
        {label: 'Basic', filter: 'basic'},
    ];

    // Handle the click of a tag
    function handleTagClick(tag) { 
        console.log('Setting tag to:', tag)
        setSelectedTag(tag)
    }


    // Element for the tags
    const tagsElement = tags.map(tag => (  // Add the parameter and parentheses
    
        <button onClick={() => handleTagClick(tag)} className='tag' key={tag.filter}>{tag.label}</button> // Use key for list items
    ));

    // Content
    return (
        <div className={`tags ${tagsClass}`}>
            {tagsElement}  {/* Render the tags */}
        </div>
    );
}

export default Tags;
