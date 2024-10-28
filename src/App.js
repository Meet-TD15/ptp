import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import Components
import CustomNavbar from './Components/Navbar'; // Importing the Navbar
import LandingPage from './Components/LandingPage';
import TripDurationSelection from './Components/TripDurationSelection';
import DestinationSelection from './Components/DestinationSelection';
import TransportationOptions from './Components/TransportationOptions';
import HotelOptions from './Components/HotelOptions';
import NearbyPlaces from './Components/NearbyPlaces';
import ReturnOptions from './Components/ReturnOptions';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar /> {/* Include the Navbar */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trip-duration" element={<TripDurationSelection />} />
          <Route path="/destinations" element={<DestinationSelection />} />
          <Route path="/transportation" element={<TransportationOptions />} />
          <Route path="/hotels" element={<HotelOptions />} />
          <Route path="/nearby-places" element={<NearbyPlaces />} />
          <Route path="/return-options" element={<ReturnOptions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
