import React, { useState } from 'react';
import './Tags.css'

function Tags({setSelectedTag}) {
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
        <div className='tags'>
            {tagsElement}  {/* Render the tags */}
        </div>
    );
}

export default Tags;
