import React, { useState, useEffect } from "react";

const CollegeEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getAllEvents');
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setEvents(data);
        } else {
          throw new Error(data.message || 'Failed to fetch events');
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-5 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-5 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-semibold text-center mb-10">Upcoming College Events</h1>
      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img 
                src={event.dOC_S3_link || "https://alumni12131415.s3.ap-south-1.amazonaws.com/alumniEventPages/Event.jpg"} 
                alt={event.venue} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2">{event.venue}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(event.event_date).toLocaleDateString()} | {event.alumni_name}
                </p>
                <p className="text-gray-700 mt-3">
                  Event organized by {event.alumni_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollegeEvents;
