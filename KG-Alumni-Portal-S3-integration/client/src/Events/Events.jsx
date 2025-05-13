import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getAllEvents');
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button 
            onClick={fetchEvents}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-lg text-gray-600">Join us for these exciting events and connect with fellow alumni</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.userId}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">{event.alumni_name}</h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Upcoming
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      <span>{new Date(event.event_date).toLocaleDateString()}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      <span>{event.venue}</span>
                    </div>

                    {event.dOC_S3_link && (
                      <div className="mt-4">
                        <a
                          href={event.dOC_S3_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          View Details
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No upcoming events at the moment.</p>
              <p className="text-gray-400">Please check back later for new events.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events; 