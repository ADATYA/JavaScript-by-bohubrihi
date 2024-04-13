import React, { useState } from 'react';
import RoomCategoryList from './RoomCategoryList';
import RoomList from './RoomList';
import BookingForm from './BookingForm';

function HotelApp() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const filteredRooms = rooms.filter((room) =>
    room.category === selectedCategory || selectedCategory === 'All'
  );

  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  const handleConfirmBooking = (name, phoneNumber) => {
    // Implement booking logic here (e.g., call an API)
    console.log(`Booking confirmed for ${name} (${phoneNumber}), Room: ${selectedRoom.id}`);
    setShowBookingForm(false);
    setSelectedRoom(null);
  };

  return (
    <div className="hotel-app">
      <h1>Hotel Booking</h1>
      <RoomCategoryList categories={rooms.map((room) => room.category)} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <RoomList rooms={filteredRooms} onBookRoom={handleBookRoom} />
      {showBookingForm && selectedRoom && (
        <BookingForm
          room={selectedRoom}
          onClose={handleCloseBookingForm}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
}

export default HotelApp;
