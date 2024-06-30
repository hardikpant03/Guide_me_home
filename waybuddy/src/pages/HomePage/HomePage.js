// src/pages/HomePage.js

import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleFetchOptions = () => {
        // Here you would fetch the transport options based on start and end points
        console.log(`Fetching transport options from ${start} to ${end}`);
    };

    return (
        <div>
            <h2>Find Your Route</h2>
            <input
                type="text"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="Starting Point"
            />
            <input
                type="text"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="Destination"
            />
            <button onClick={handleFetchOptions}>Get Transport Options</button>
        </div>
    );
};

export default HomePage;
