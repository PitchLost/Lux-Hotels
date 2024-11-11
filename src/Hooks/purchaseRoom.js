export function purchaseRoom(user, room, nights) { 
    const totalPrice = room.price * nights; 
    // If we had a backend then this is where we would make a request to it.
    // All that you would need to do is make a POST request to a server, Pass user room and price as arguments and then have a backend that handles the 
    //request and puts it into a database which would be used to keep track of booked rooms
    alert('Room has not been booked, an internal error occured!')
}