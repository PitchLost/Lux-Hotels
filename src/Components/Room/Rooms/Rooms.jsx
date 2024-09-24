import React from 'react';
import './Rooms.css';

function Rooms({ tag }) {
    const RoomsArray = [ 
        {name: 'Penthouse', description: 'Enjoy the stunning views of the city skyline', tags: 'prem', image: ''},
        {name: 'Penthouse Basic', description: '', tags: 'prem', image: ''},
        {name: '2 Double 2 Singles', description: '', tags: 'eco2', image: ''},
        {name: '1 Double 3 Singles', description: '', tags: 'eco2', image: ''},
        {name: '1 Double 1 Single', description: '', tags: 'eco', image: ''},
        {name: '2 Doubles', description: '', tags: 'eco', image: ''},
        {name: '3 Singles', description: '', tags: 'eco', image: ''},
        {name: '1 Double', description: '', tags: 'basic', image: ''},
        {name: '2 Singles', description: '', tags: 'basic', image: ''},
    ];

    // If tag.filter is empty, show all rooms, otherwise filter based on tag
    const FilteredRooms = tag.filter === '' 
        ? RoomsArray 
        : RoomsArray.filter(room => room.tags === tag.filter);

    const RoomsElement = FilteredRooms.map(room => (
        <div className='rooms-room' key={room.name}> 
            <h1>{room.name}</h1>
            <p>{room.description}</p>
            <img className='room-img' src={room.image}></img>
        </div>
    ));

    return (
        <div className='rooms'>
            {RoomsElement.length > 0 ? RoomsElement : <p>No available rooms found with this tag.</p>}
        </div>
    );
}

export default Rooms;
