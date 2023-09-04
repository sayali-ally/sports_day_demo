import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventCard from './components/EventCard';
import SelectedEvent from './components/SelectedEvent';
import mockEvents from './mockEvents'; // Mock data
import './App.css'

const App = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleSelect = (event) => {
    // Check if the user has already selected 3 events
    if (selectedEvents.length >= 3) {
      toast.error('You can only select up to 3 events');
      return;
    }
    // Check for timing conflicts before selecting the event
    const hasConflicts = selectedEvents.some(selectedEvent =>
      areTimingsConflicting(selectedEvent, event)
    );
    if (hasConflicts) {
      toast.error('Selected event has a timing conflict with another selected event');
      return;
    }
    setSelectedEvents([...selectedEvents, event]);
    disableRemainingCards(event);
  };

  const disableRemainingCards=(event)=>{
     if(areTimingsConflicting(event,selectedEvents)){

     }
  }
  // Helper function to check for timing conflicts
  const areTimingsConflicting = (event1, event2) => {
    const startTime1 = new Date(event1.start_time);
    const endTime1 = new Date(event1.end_time);
    const startTime2 = new Date(event2.start_time);
    const endTime2 = new Date(event2.end_time);

    return (
      (startTime2 >= startTime1 && startTime2 < endTime1) || // Event2 starts during Event1
      (endTime2 > startTime1 && endTime2 <= endTime1) ||     // Event2 ends during Event1
      (startTime2 <= startTime1 && endTime2 >= endTime1)     // Event2 contains Event1
    );
  };

  const handleDeselect = (event) => {
    setSelectedEvents(selectedEvents.filter(selectedEvent => selectedEvent !== event)); 
  };

  return (
    <div className="app">
      <h2 className="quote"> “Champions keep playing until they get it right.” --Billie Jean King</h2>
      <h2 className="heading">SPORTS DAY 2023 - ALL EVENTS</h2>

      <img className="trophy" src="https://pngimg.com/d/golden_cup_PNG14549.png"/>

      <div className="event-list">
        {mockEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onClick={handleSelect}
          />
        ))}
      </div>
      <ToastContainer
        position="top-right" // Set the position of toast notifications
        autoClose={3000}     // Auto-close after 3 seconds
      />
      <div className="selected-list">
        <h2 style={{ textAlign: "center", color: "white", fontFamily: "serif", fontSize: "30px" }}>SELECTED EVENTS</h2>
        {selectedEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onClick={handleDeselect}
            isSelected
          />
        ))}
      </div>
    </div>
  );
};

export default App;
