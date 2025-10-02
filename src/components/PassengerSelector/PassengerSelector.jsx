import React from "react";
import "./PassengerSelector.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const CounterRow = ({
  title,
  subtitle,
  count,
  onIncrement,
  onDecrement,
  isDecrementDisabled,
}) => (
  <div className="counter-row">
    <div className="counter-label">
      <div className="counter-title">{title}</div>
      <div className="counter-subtitle">{subtitle}</div>
    </div>
    <div className="counter-controls">
      <button
        className="counter-button"
        onClick={onDecrement}
        disabled={isDecrementDisabled}
      >
        <FiMinus />
      </button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={onIncrement}>
        <FiPlus />
      </button>
    </div>
  </div>
);

function PassengerSelector({
  passengers,
  onPassengerChange,
  selectedClass,
  onClassChange,
  onApply,
}) {
  if (!passengers) {
    return null;
  }

  const handlePassengerCount = (type, amount) => {
    onPassengerChange({
      ...passengers,
      [type]: Math.max(0, passengers[type] + amount),
    });
  };

  return (
    <div className="passenger-selector">
      <div className="selector-columns">
        <div className="selector-column passenger-column">
          <h4>Passengers</h4>
          <CounterRow
            title="Adults"
            subtitle=""
            count={passengers.adults}
            onIncrement={() => handlePassengerCount("adults", 1)}
            onDecrement={() => handlePassengerCount("adults", -1)}
            isDecrementDisabled={passengers.adults <= 1}
          />
          <CounterRow
            title="Children"
            subtitle="(2-11 yrs)"
            count={passengers.children}
            onIncrement={() => handlePassengerCount("children", 1)}
            onDecrement={() => handlePassengerCount("children", -1)}
          />
          <CounterRow
            title="Infants"
            subtitle="in arms"
            count={passengers.infantsInArms}
            onIncrement={() => handlePassengerCount("infantsInArms", 1)}
            onDecrement={() => handlePassengerCount("infantsInArms", -1)}
          />
          <CounterRow
            title="Infants"
            subtitle="in seat"
            count={passengers.infantsInSeat}
            onIncrement={() => handlePassengerCount("infantsInSeat", 1)}
            onDecrement={() => handlePassengerCount("infantsInSeat", -1)}
          />
          <a href="#" className="unaccompanied-minor-link">
            Unaccompanied minor
          </a>
        </div>
        <div className="selector-column">
          <h4>Class</h4>
          <div className="class-options">
            {/* --- FIX APPLIED HERE --- */}
            <label
              className={`class-option ${
                selectedClass === "Economy" ? "selected" : ""
              }`}
            >
              <span>Economy</span>
              <input
                type="radio"
                name="class"
                value="Economy"
                checked={selectedClass === "Economy"}
                onChange={(e) => onClassChange(e.target.value)}
              />
              <span className="radio-checkmark"></span>
            </label>

            {/* --- FIX APPLIED HERE --- */}
            <label
              className={`class-option ${
                selectedClass === "Premium Economy" ? "selected" : ""
              }`}
            >
              <span>Premium Economy</span>
              <input
                type="radio"
                name="class"
                value="Premium Economy"
                checked={selectedClass === "Premium Economy"}
                onChange={(e) => onClassChange(e.target.value)}
              />
              <span className="radio-checkmark"></span>
            </label>

            {/* --- FIX APPLIED HERE --- */}
            <label
              className={`class-option ${
                selectedClass === "Business" ? "selected" : ""
              }`}
            >
              <span>Business</span>
              <input
                type="radio"
                name="class"
                value="Business"
                checked={selectedClass === "Business"}
                onChange={(e) => onClassChange(e.target.value)}
              />
              <span className="radio-checkmark"></span>
            </label>

            {/* --- FIX APPLIED HERE --- */}
            <label
              className={`class-option ${
                selectedClass === "First" ? "selected" : ""
              }`}
            >
              <span>First</span>
              <input
                type="radio"
                name="class"
                value="First"
                checked={selectedClass === "First"}
                onChange={(e) => onClassChange(e.target.value)}
              />
              <span className="radio-checkmark"></span>
            </label>
          </div>

          <div className="selector-footer">
            <button className="apply-button" onClick={onApply}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassengerSelector;
