import React from 'react';
import './Rooms.css';

function Rooms({ tag }) {
    const RoomsArray = [ 
        {name: 'Penthouse', description: 'Enjoy the stunning views of the city skyline from our luxurious penthouse suite, complete with modern amenities and spacious living areas.', tags: 'prem', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_960_720.jpg'},
        {name: 'Penthouse Basic', description: 'A more affordable option of our penthouse, offering beautiful views without compromising comfort.', tags: 'prem', image: 'https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg'},
        {name: '2 Double 2 Singles', description: 'Perfect for families or groups, this room features two double beds and two single beds, accommodating up to six guests.', tags: 'eco2', image: 'https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878054_1280.jpg'},
        {name: '1 Double 3 Singles', description: 'Ideal for larger groups, this room has one double bed and three single beds, providing ample space for everyone.', tags: 'eco2', image: 'https://cdn.pixabay.com/photo/2023/09/09/06/34/bedroom-8242523_1280.jpg'},
        {name: '1 Double 1 Single', description: 'A cozy room featuring one double bed and one single bed, perfect for small families or friends traveling together.', tags: 'eco', image: 'https://cdn.pixabay.com/photo/2016/04/15/11/45/hotel-1330841_1280.jpg'},
        {name: '2 Doubles', description: 'This spacious room includes two double beds, ideal for friends or families wanting to share accommodations.', tags: 'eco', image: 'https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_1280.jpg'},
        {name: '3 Singles', description: 'A comfortable room featuring three single beds, perfect for budget travelers or solo adventurers.', tags: 'eco', image: 'https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg'},
        {name: '1 Double', description: 'A simple and elegant room with a double bed, perfect for couples or solo travelers looking for a comfortable stay.', tags: 'basic', image: 'https://cdn.pixabay.com/photo/2020/12/24/19/08/hotel-room-5858067_1280.jpg'},
        {name: '2 Singles', description: 'This room features two single beds, ideal for friends or colleagues traveling together.', tags: 'basic', image: 'https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878054_1280.jpg'},
    ];

    // If tag.filter is empty, show all rooms; otherwise, filter based on tag
    const FilteredRooms = tag.filter === '' 
        ? RoomsArray 
        : RoomsArray.filter(room => room.tags === tag.filter);

    const RoomsElement = FilteredRooms.map(room => (
        <div className='rooms-room' key={room.name}> 
            <h1>{room.name}</h1>
            <p>{room.description}</p>
            <img className='room-img' src={room.image} alt={room.name}></img>
        </div>
    ));

    return (
        <div className='rooms'>
            {RoomsElement.length > 0 ? RoomsElement : <p>No available rooms found with this tag.</p>}
        </div>
    );
}

export default Rooms;
