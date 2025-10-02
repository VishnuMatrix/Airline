import React, { useState, useEffect, useRef } from "react";
import "./BookingForm.css";
import {
  FaPlane,
  FaBed,
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
import PassengerSelector from "../PassengerSelector/PassengerSelector";

function BookingForm() {
  const [activeTab, setActiveTab] = useState("flights");
  const [isPassengerSelectorOpen, setIsPassengerSelectorOpen] = useState(false);

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsInArms: 0,
    infantsInSeat: 0,
  });

  // CRITICAL: Make sure this line exists and is correct
  const [selectedClass, setSelectedClass] = useState("Economy");

  const passengerSelectorRef = useRef(null);

  const getPassengerDisplayText = () => {
    const totalPassengers =
      passengers.adults + passengers.children + passengers.infantsInSeat;
    const passengerText = `${totalPassengers} Passenger${
      totalPassengers > 1 ? "s" : ""
    }`;
    const classText =
      selectedClass === "Premium Economy" ? "Prem Eco" : selectedClass;
    return `${passengerText}, ${classText}`;
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        passengerSelectorRef.current &&
        !passengerSelectorRef.current.contains(event.target)
      ) {
        setIsPassengerSelectorOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [passengerSelectorRef]);

  return (
    <div className="booking-widget">
      <div className="widget-tabs">
        <button
          className={`tab-item ${activeTab === "flights" ? "active" : ""}`}
          onClick={() => setActiveTab("flights")}
        >
          <FaPlane /> Flights
        </button>
        <button
          className={`tab-item ${activeTab === "hotels" ? "active" : ""}`}
          onClick={() => setActiveTab("hotels")}
        >
          <FaBed /> Hotels
        </button>
        <button
          className={`tab-item ${activeTab === "cars" ? "active" : ""}`}
          onClick={() => setActiveTab("cars")}
        >
          <FaCar /> Cars
        </button>
      </div>

      <div className="widget-content">
        <div className="form-grid">
          <div className="form-group large">
            <div className="input-with-icon">
              <FaMapMarkerAlt className="input-icon" />
              <input type="text" id="origin" placeholder="City / Airport" />
            </div>
          </div>
          <div className="form-group large">
            <div className="input-with-icon">
              <FaMapMarkerAlt className="input-icon" />
              <input
                type="text"
                id="destination"
                placeholder="City / Airport"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-with-icon">
              <FaCalendarAlt className="input-icon" />
              <input
                type="text"
                id="departure"
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-with-icon">
              <FaCalendarAlt className="input-icon" />
              <input
                type="text"
                id="return"
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>

          <div
            className="form-group passenger-group"
            ref={passengerSelectorRef}
          >
            <div
              className="input-with-icon"
              onClick={() =>
                setIsPassengerSelectorOpen(!isPassengerSelectorOpen)
              }
            >
              <FaUserFriends className="input-icon" />
              <input
                type="text"
                id="passengers"
                value={getPassengerDisplayText()}
                readOnly
              />
            </div>
            {isPassengerSelectorOpen && (
              <PassengerSelector
                passengers={passengers}
                onPassengerChange={setPassengers}
                // CRITICAL: Make sure these two props are being passed correctly
                selectedClass={selectedClass}
                onClassChange={setSelectedClass}
                onApply={() => setIsPassengerSelectorOpen(false)}
              />
            )}
          </div>

          <button className="search-button">SEARCH</button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
