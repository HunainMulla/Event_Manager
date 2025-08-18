"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Event Manager
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Create, manage, and track your events with our simple and intuitive event management system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/allevents" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Go to Events
          </Link>
          <Link 
            href="/events" 
            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-8 rounded-lg transition-all duration-200"
          >
            Create New Event
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: "📅", 
              title: "Easy Event Creation", 
              description: "Quickly create events with just a few clicks" 
            },
            { 
              icon: "🔔", 
              title: "Stay Organized", 
              description: "Keep track of all your events in one place" 
            },
            { 
              icon: "📱", 
              title: "Access Anywhere", 
              description: "Access your events from any device" 
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;