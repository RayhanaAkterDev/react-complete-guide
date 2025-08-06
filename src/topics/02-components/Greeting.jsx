import React from 'react';

const name = 'Sumaya!';

const Greeting = () => {
    return (
        <h2 className="text-xl font-semibold mb-4">
            <span className="text-2xl font-extrabold">Hello {name}</span> — from
            Greeting Component!
        </h2>
    );
};

export default Greeting;
