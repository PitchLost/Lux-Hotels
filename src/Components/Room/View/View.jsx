import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../../App'

import './View.css'

function View() {
    const navigate = useNavigate()
    const [selectedRoom, setSelectedRoom] = useContext(Context)

    function handleReturnToRoom() { 
        setSelectedRoom(null) 
        navigate('/room')
    }


    useEffect(() => {
        if (selectedRoom == null) {
            navigate('/')
        }
    }, [selectedRoom, navigate])  // Dependency array ensures useEffect triggers when selectedRoom or navigate changes

    if (selectedRoom == null) {
        return null  // Return null if navigating away, to avoid rendering the component
    }

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
                <button>Book Room</button>

                <p>Not quite what you are looking for? Feel free to click the button below to return to the room selection page</p>
                <button onClick={() => handleReturnToRoom()}>Return to selection</button>
            </div>
        </div>
    )
}

export default View
