import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rooms.css';

import { Context } from '../../../App';

function Rooms({ tag }) {
    const navigate = useNavigate()
    const [selectedRoom, setSelectedRoom] = useContext(Context)

    
    const RoomsArray = [ 
        {name: 'Penthouse', price: 4500, description: 'Enjoy the stunning views of the city skyline from our luxurious penthouse suite, complete with modern amenities and spacious living areas.', tags: 'prem', image: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_960_720.jpg'},
        {name: 'Penthouse Basic', price: 4000, description: 'A more affordable option of our penthouse, offering beautiful views without compromising comfort.', tags: 'prem', image: 'https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg'},
        {name: '2 Double 2 Singles', price: 800, description: 'Perfect for families or groups, this room features two double beds and two single beds, accommodating up to six guests.', tags: 'eco2', image: 'https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878054_1280.jpg'},
        {name: '1 Double 3 Singles', price: 850, description: 'Ideal for larger groups, this room has one double bed and three single beds, providing ample space for everyone.', tags: 'eco2', image: 'https://cdn.pixabay.com/photo/2023/09/09/06/34/bedroom-8242523_1280.jpg'},
        {name: '1 Double 2 Singles', price: 500, description: 'A cozy room featuring one double bed and one single bed, perfect for small families or friends traveling together.', tags: 'eco', image: 'https://cdn.pixabay.com/photo/2016/04/15/11/45/hotel-1330841_1280.jpg'},
        {name: '2 Doubles', price: 500, description: 'This spacious room includes two double beds, ideal for friends or families wanting to share accommodations.', tags: 'eco', image: 'https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_1280.jpg'},
        {name: '3 Singles', price: 400, description: 'A comfortable room featuring three single beds, perfect for budget travelers or solo adventurers.', tags: 'eco', image: 'https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg'},
        {name: '1 Double', price: 200, description: 'A simple and elegant room with a double bed, perfect for couples or solo travelers looking for a comfortable stay.', tags: 'basic', image: 'https://cdn.pixabay.com/photo/2020/12/24/19/08/hotel-room-5858067_1280.jpg'},
        {name: '2 Singles', price: 200, description: 'This room features two single beds, ideal for friends or colleagues traveling together.', tags: 'basic', image: 'https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878054_1280.jpg'},
    ];

    useEffect(() => { 
        if (selectedRoom !== null) { 
            navigate('/view')
        }
    }, [selectedRoom])


    // If tag.filter is empty, show all rooms; otherwise, filter based on tag
    const FilteredRooms = tag.filter === '' 
        ? RoomsArray 
        : RoomsArray.filter(room => room.tags === tag.filter);

    const RoomsElement = FilteredRooms.map(room => (
        <div className='rooms-room' key={room.name} onClick={() => setSelectedRoom(room)}> 
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
