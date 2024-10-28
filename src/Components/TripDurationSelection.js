// src/Components/TripDurationSelection.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for datepicker
import './TripDurationSelection.css'; // Optional: Create a CSS file for styling

const TripDurationSelection = () => {
  // State for journey date and time
  const [journeyStartDate, setJourneyStartDate] = useState(new Date());
  const [returnJourneyDate, setReturnJourneyDate] = useState(new Date());

  return (
    <div className="trip-duration-selection">
      <div className="journey-section">
        <h2>Journey Starting</h2>
        <div className="date-time-picker">
          <label htmlFor="journey-start">Select Journey Date and Time:</label>
          <DatePicker
            selected={journeyStartDate}
            onChange={(date) => setJourneyStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            id="journey-start"
          />
        </div>
      </div>
      
      <div className="return-section">
        <h2>Return Journey</h2>
        <div className="date-time-picker">
          <label htmlFor="return-journey">Select Return Date and Time:</label>
          <DatePicker
            selected={returnJourneyDate}
            onChange={(date) => setReturnJourneyDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            id="return-journey"
          />
        </div>
      </div>
    </div>
  );
};

export default TripDurationSelection;
