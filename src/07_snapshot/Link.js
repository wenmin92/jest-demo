import React, { useState } from "react";

const Link = ({ page, children }) => {
    const [status, setStatus] = useState('normal');
    const handleMouseEnter = () => {
        setStatus('hovered');
    }

    const handleMouseLeave = () => {
        setStatus('normal');
    }

    return (
        <a className={status}
            href={page || '#'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </a>
    );
};

export default Link;
