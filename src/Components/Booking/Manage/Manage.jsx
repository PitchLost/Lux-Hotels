import React, { useState } from 'react'

function Manage() {
    const [usersBookings, setUsersBookings] = useState(null)

    // We could either make a request to a database containing booked rooms and accounts but without a backend we will just fetch frim the browser storage as that is how we are simulating it here

    useEffect(() => {

    }, [])
    return (
        <div> 
            <h1>Any bookings made with your account will be shown below</h1>
        </div>
    )
}

export default Manage
