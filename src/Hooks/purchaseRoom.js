export function purchaseRoom(room, nights) { 
    console.log('Booking Room:', room)
    const totalPrice = room.price * nights; 
    console.log('The total price will be:', totalPrice)

    // If we had a backend then this is where we would make a request to it.
}