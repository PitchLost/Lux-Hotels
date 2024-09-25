import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../../App'

function View() {
    const navigate = useNavigate()
    const [selectedRoom, setSelectedRoom] = useContext(Context)

    useEffect(() => {
        if (selectedRoom == null) {
            navigate('/')
        }
    }, [selectedRoom, navigate])  // Dependency array ensures useEffect triggers when selectedRoom or navigate changes

    if (selectedRoom == null) {
        return null  // Return null if navigating away, to avoid rendering the component
    }

    return (
        <div>
            <h1>Room View</h1>
            <p>{selectedRoom.name}</p>
        </div>
    )
}

export default View
