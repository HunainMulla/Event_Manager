'use client'

import { useState, useEffect } from "react";

interface EventForm {
  name: string;
  date: string;
}

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState<EventForm[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventForm[]>([]);

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
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default AllEvents;
