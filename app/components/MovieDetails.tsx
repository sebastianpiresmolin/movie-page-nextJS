"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MovieDocument } from '../lib/schemas';

interface MovieDetailsProps {
  movie: MovieDocument;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const router = useRouter();
  const [selectedMovie, setSelectedMovie] = useState<MovieDocument | null>(movie);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [selectedSalon, setSelectedSalon] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const handleSalonSelect = (salonNumber: number) => {
    setSelectedSalon(salonNumber);
  };
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]); 
    }
    return dates;
  };
  const dates = generateDates();
  const timePeriods = ["10:00 AM", "2:00 PM", "6:00 PM"];
  
  
  const handleSeatSelect = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const isSeatBooked = (seatNumber: number) => {
    return selectedMovie && Array.isArray(selectedMovie.bookedSeats) && selectedMovie.bookedSeats.includes(seatNumber);
  };

  const bookSeats = async () => {
    if (!selectedMovie || !selectedDate || !selectedTime) return;
  
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedMovie.id,
          salon: selectedSalon,
          date: selectedDate,
          time: selectedTime,
          bookedSeats: selectedSeats,
        }),
      });
  
      if (response.ok) {
        const updatedMovie = {
          ...selectedMovie,
          bookedSeats: [
            ...(Array.isArray(selectedMovie.bookedSeats)
              ? selectedMovie.bookedSeats
              : []),
            ...selectedSeats,
          ],
        };
  
        setSelectedMovie(updatedMovie as MovieDocument);
        router.push("/payment");
      } else {
        console.error("Failed to book seats");
      }
    } catch (error) {
      console.error("Error booking seats:", error);
    }
  };
  
  
  
  const rows = [
    [1, 2, 3, 4, 5, 6, 7, 8], 
    [9, 10, 11, 12, 13, 14, 15, 16, 17], 
    [18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 
    [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], 
    [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  ];

  return (
    <div className="h-full w-full max-w-screen flex-grow min-h-screen p-8">
      {selectedMovie && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">{selectedMovie.title}</h2>
          <p className="mt-2">
            Available Seats: {selectedMovie.seats - selectedMovie.bookedSeats.length}
          </p>
          <div className="flex justify-center mt-4">
          <img src="/images/mov.jpg" alt="Movie Image" className="max-w-full h-auto" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Select Seats</h3>
          <div className="flex flex-col items-center mt-2 space-y-4">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex justify-center space-x-2 ${
                  rowIndex === 0 ? "translate-x-1" : "r0"
                } ${rowIndex === 1 ? "translate-x-1" : ""} ${
                  rowIndex === 2 ? "mt-8" : ""
                } ${rowIndex === 3 ? "-translate-x-1 mt-8" : ""} ${
                  rowIndex === 4 ? "-translate-x-1" : ""
                }`}
              >
                {row.map((seatNumber) => (
                  <button
                    key={seatNumber}
                    disabled={isSeatBooked(seatNumber) || selectedSeats.includes(seatNumber)}
                    className={`p-2 w-10 h-10 rounded-full text-center ${
                      isSeatBooked(seatNumber)
                        ? "bg-gray-300"
                        : selectedSeats.includes(seatNumber)
                        ? "bg-red-900 text-white"
                        : "bg-red-700 text-white hover:bg-red-800"
                    }`}
                    onClick={() => handleSeatSelect(seatNumber)}
                  >
                    {seatNumber}
                  </button>
                ))}
              </div>
            ))}
          </div>
        
<div className="mt-4">
  <label htmlFor="salon" className="mr-2 font-semibold  text-red-900 ">Select Salon:</label>
  <select
    id="salon"
    value={selectedSalon}
    onChange={(e) => handleSalonSelect(Number(e.target.value))}
    className="px-2 py-1 border border-gray-300 rounded-md  text-red-900"
  >
    <option value={1}>Salon 1</option>
    <option value={2}>Salon 2</option>
    <option value={3}>Salon 3</option>
  </select>
</div>

  <div className="mt-4">
          <label htmlFor="date" className="mr-2 font-semibold">Select Date:</label>
          <div className="flex space-x-4">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-md ${selectedDate === date ? 'bg-red-900 text-white' : 'bg-gray-300'}`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="mt-4">
            <label htmlFor="time" className="mr-2 font-semibold">Select Time:</label>
            <div className="flex space-x-4">
              {timePeriods.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-md ${selectedTime === time ? 'bg-red-900 text-white' : 'bg-gray-300'}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}


          <button
            onClick={bookSeats}
            className="mt-4 px-4 py-2 bg-red-900 text-white rounded-md shadow-md hover:bg-red-800"
          >
            Book Seats
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
