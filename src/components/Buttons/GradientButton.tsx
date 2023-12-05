

import React from 'react';
import Button from "@mui/material/Button";

type GradientButtonProps = {
    color1: string;
    color2: string;
    onClick: () => void; // Adjust the type based on your click handler's needs
    children: React.ReactNode;
};


export const GradientButton: React.FC<GradientButtonProps> = ({ color1, color2, onClick, children }) => {

    const gradiantBtnStyle = {
            backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
            color: 'white',
            padding: '10px 20px',
            margin: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: "box-shadow 0.3s ease, transform 0.3s ease;" /* Specify both transitions */
    };

    return (
        <Button
            style={gradiantBtnStyle}
            onClick={onClick}
            onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {children}
        </Button>
    );
};
