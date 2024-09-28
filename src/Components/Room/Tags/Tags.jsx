import React, { useContext, useState } from 'react';
import './Tags.css'

import { DarkContext } from '../../../App';

function Tags({setSelectedTag}) {

    const [darkMode, setDarkMode] = useContext(DarkContext) 
    const tagsClass = darkMode ? 'tags-dark':'tags-light'
    const tags = [ 
        {label: 'Premium', filter: 'prem'},
        {label: 'Economy+', filter: 'eco2'},
        {label: 'Economy', filter: 'eco'},
        {label: 'Basic', filter: 'basic'},
    ];

    function handleTagClick(tag) { 
        console.log('Setting tag to:', tag)
        setSelectedTag(tag)
    }



    const tagsElement = tags.map(tag => (  // Add the parameter and parentheses
    
        <button onClick={() => handleTagClick(tag)} className='tag' key={tag.filter}>{tag.label}</button> // Use key for list items
    ));

    return (
        <div className={`tags ${tagsClass}`}>
            {tagsElement}  {/* Render the tags */}
        </div>
    );
}

export default Tags;
