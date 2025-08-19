'use client'

import { useState, useEffect } from "react";

interface EventForm {
  name: string;
  date: string;
}

const AllEvents = () => {


  const [allEvents, setAllEvents] = useState<EventForm[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventForm[]>([]);


  const handleDelete = (index: number) => {
    const updatedEvents = [...allEvents];
    updatedEvents.splice(index, 1);
    setAllEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setAllEvents(JSON.parse(storedEvents));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          All Events
        </h1>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search events..."
            onChange={(e) =>
              setFilteredEvents(
                allEvents.filter((event) =>
                  event.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
              )
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Events List */}
        <ul className="space-y-3">
          {filteredEvents.length > 0
            ? filteredEvents.map((event, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 
                             bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
              >
                <span className="font-medium text-gray-700">
                  {event.name}
                </span>
                <span className="text-sm text-gray-500">{event.date}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                  aria-label="Delete event"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </li>
            ))
            : allEvents.map((event, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 
                             bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
              >
                <span className="font-medium text-gray-700">
                  {event.name}
                </span>
                <span className="text-sm text-gray-500">{event.date}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                  aria-label="Delete event"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AllEvents;
