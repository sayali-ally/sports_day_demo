import React from 'react';
import formatTimings from '../utils/formatTimings';
import './SelectedEvent.css';

const SelectedEvent = ({ event, onDeselect }) => {
  const formattedTimings = formatTimings(event.start_time, event.end_time);

  return (
    <div className="selected-card">
      <div className="event-content">
      <h3 className="event-name">{event.event_name}</h3>
      <p className="event-category">({event.event_category})</p>
      <p className="event-timings">{formattedTimings}</p>
      <button className="event-button-selected" onClick={() => onDeselect(event)}>REMOVE</button>
      </div>
    </div>
  );
};
export default SelectedEvent;
