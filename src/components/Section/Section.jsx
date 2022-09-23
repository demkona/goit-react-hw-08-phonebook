import React from 'react';

export const Section = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}