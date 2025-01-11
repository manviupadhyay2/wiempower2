import React from 'react'
import { FaCalendarAlt, FaTools, FaRegHandshake } from 'react-icons/fa';

const Events = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-6 p-8">
            <FaTools className="text-6xl text-indigo-500 animate-spin-slow" />
            <h1 className="text-4xl font-semibold text-gray-800">Our Upcoming Events</h1>
            <div className="text-lg text-gray-600">
                <p>
                    The magic is brewing, and we're busy putting together something special!
                    <br />
                    Stay tuned — exciting events are on the horizon.
                </p>
                <p className="mt-4 text-xl text-gray-700 font-medium">
                    <FaCalendarAlt className="inline-block mr-2 text-blue-400" />
                    Events will be announced soon. Keep an eye on the calendar!
                </p>
                <p className="mt-4 text-xl text-gray-700 font-medium">
                    <FaRegHandshake className="inline-block mr-2 text-green-400" />
                    Ready to collaborate? Our events are designed for you to make connections and grow!
                </p>
            </div>
        </div>
    );
};

export default Events;
