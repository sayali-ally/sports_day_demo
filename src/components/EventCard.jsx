import React from 'react';
import formatTimings from '../utils/formatTimings';
import './EventCard.css'; // Import the CSS file for EventCard styling
import './SelectedEvent.css';

const EventCard = ({ event, onClick , isSelected }) => {
  const formattedTimings = formatTimings(event.start_time, event.end_time);

  return (
    <div className="all-events">
    <div className="event-card">
      <div className="event-content">
        <h3 className="event-name">{event.event_name}</h3>
        <p className="event-category">({event.event_category})</p>
        <p className="event-timings">{formattedTimings}</p>
        {isSelected ? <button className="event-button-selected" onClick={() => onClick(event)}>REMOVE</button> : 
        <button className="event-button" onClick={() => onClick(event)}>SELECT</button>}
      </div>
    </div>
    </div>
  );
};

export default EventCard;
