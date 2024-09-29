import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { RoomContext } from '../../../App' // RoomContext for the selectedRoom state

import './View.css'

function View() {
    const navigate = useNavigate()
    const [selectedRoom, setSelectedRoom] = useContext(RoomContext) // Get the selectedRoom from the RoomContext

    // Return to room selection function
    function handleReturnToRoom() { 
        setSelectedRoom(null) 
        navigate('/room')
    }

    // If the selectedRoom is null return to the home page. This is often when the user refreshes while on the view tab meaning selectedRoom has not been set. This will result in a error.
    useEffect(() => {
        if (selectedRoom == null) {
            navigate('/')
        }

    }, [selectedRoom, navigate])  // Dependency array ensures useEffect triggers when selectedRoom or navigate changes

    if (selectedRoom == null) {
        return null  // Return null if navigating away, to avoid rendering the component
    }

    // Content
    return (
        <div className='view'>
            <div className='view-container'>
                <h1>{selectedRoom.name}</h1>
                <h2>${selectedRoom.price} per night</h2>
                <img src={selectedRoom.image}></img>
                <p>{selectedRoom.description}</p>
            </div>
            <div className='view-external'> 
                <p>Please note that our rooms can be booked completely out occasions such as public holidays or weekends</p>
                <button onClick={() => navigate('/booking')}>Book Room</button>

                <p>Not quite what you are looking for? Feel free to click the button below to return to the room selection page</p>
                <button onClick={() => handleReturnToRoom()}>Return to selection</button>
            </div>
        </div>
    )
}

export default View
