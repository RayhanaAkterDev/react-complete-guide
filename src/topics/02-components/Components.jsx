import React from 'react';
import Greeting from './Greeting';

// Reusable styled container component
const Card = ({ children }) => (
    <div className="bg-amber-400 text-black p-6 rounded-lg shadow-lg mt-8 w-lg mx-auto">
        {children}
    </div>
);

// Declare some JavaScript variables outside JSX
const x = 10;
const y = 20;

const Components = () => {
    return (
        <>
            {/* Use Card component to wrap content */}
            <Card>
                <Greeting />
                <p className="text-lg font-bold">
                    This is the Components container.
                </p>
            </Card>

            {/* Section demonstrating embedding JS expressions in JSX */}
            <div className="mt-8">
                <h3 className="text-2xl font-bold border-b-2">
                    Embedding JavaScript Expressions in JSX
                </h3>
                <p className="text-lg mt-4">
                    {/* Embed variables and expressions inside JSX using curly braces */}
                    The sum of {x} and {y} is {x + y}.
                </p>
            </div>
        </>
    );
};

export default Components;
