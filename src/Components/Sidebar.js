// components/Sidebar.js
import React from 'react';

const Sidebar = ({ onSearch, onFilter }) => {
  return (
    <aside className="sidebar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <div>
        <label htmlFor="filter">Filter:</label>
        <select id="filter" onChange={(e) => onFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="restaurants">Restaurants</option>
          <option value="schools">Schools</option>
          {/* Add other filter options as needed */}
        </select>
      </div>
      {/* Add other sidebar content here */}
      <style jsx>{`
        .sidebar {
          width: 250px; /* Adjust width as needed */
          padding: 1rem;
          background: #f5f5f5; /* Light grey background */
          height: 90vh; /* Adjust to match map height */
          overflow-y: auto; /* Enable scrolling if content overflows */
        }
        input, select {
          width: 100%; /* Full width */
          margin-bottom: 1rem;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
