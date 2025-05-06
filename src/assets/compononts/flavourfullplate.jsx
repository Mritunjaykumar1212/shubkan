import React, { useEffect, useState } from 'react';

function FlavourFullPlate() {
    const [style, setStyle] = useState({ opacity: 0, transform: 'translateY(50px)' });
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 200;

            if (scrollPosition > threshold) {
                const opacity = Math.min((scrollPosition - threshold) / 300, 1);
                const translateY = Math.max(50 - (scrollPosition - threshold) / 5, 0);
                setStyle({ opacity, transform: `translateY(${translateY}px)` });
            } else {
                setStyle({ opacity: 0, transform: 'translateY(50px)' });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            <div className='flav1' style={style}>
                <div className='flav2'>
                    <div className='flav3'>
                        <div className='flav4'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='flav_line'>
                            <div className='flav3_ch1'></div>
                        </div>
                        </div>
                    </div>
                    <div className='flav3'>
                    <div className='flav4'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='flav_line'>
                            <div className='flav3_ch1'></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlavourFullPlate;
