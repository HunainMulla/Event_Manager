'use client'

import { useState, useEffect } from 'react';

interface EventItem {
    name: string;
    date: string;
}

const Events = ({ allEvents, setAllEvents }: { allEvents: EventItem[], setAllEvents: React.Dispatch<React.SetStateAction<EventItem[]>> }) => {

    useEffect(() => {
        const storedEvents = localStorage.getItem('events');
        if (storedEvents) {
            setAllEvents(JSON.parse(storedEvents));
        }
    }, []);

    const handleDelete = (index: number) => {
        const updatedEvents = [...allEvents];
        updatedEvents.splice(index, 1);
        setAllEvents(updatedEvents);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
            {allEvents.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No events yet. Create one above!</p>
            ) : (
                <ul className="space-y-3">
                    {allEvents.map((event: EventItem, index: number) => (
                        <li
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex justify-between items-center"
                        >
                            <div>
                                <h3 className="font-medium text-gray-900">{event.name}</h3>
                                <p className="text-sm text-gray-500">
                                    {new Date(event.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
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
            )}
        </div>
    );
};

export default Events;