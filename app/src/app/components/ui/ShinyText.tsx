// src/app/components/ui/ShinyText.tsx
"use client";

import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <span
            className={`
                bg-clip-text text-transparent 
                inline-block 
                ${disabled ? '' : 'animate-shine'} 
                ${className}
            `}
            style={{

                backgroundImage: `
                    linear-gradient(var(--foreground-muted), var(--foreground-muted)),
                    linear-gradient(120deg, transparent 40%, white 50%, transparent 60%)
                `,
                backgroundSize: '100% 100%, 200% 100%',
                backgroundPosition: '0 0, 50% 50%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                animationDuration: animationDuration,
            } as React.CSSProperties}
        >
            {text}
        </span>
    );
};

export default ShinyText;
