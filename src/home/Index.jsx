import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React - Heros Task</h1>
             <p><Link to="heros/">&gt;&gt; Heros managment</Link></p>
        </div>
    );
}

export { Home };