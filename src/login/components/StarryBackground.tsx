import React from 'react';

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    animationDelay: number;
}

const StarryBackground: React.FC = () => {
    // Generate random stars
    const generateStars = (count: number): Star[] => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: Math.random() * 3,
        }));
    };

    const stars = generateStars(50);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Gradient background */}
            <div 
                className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
                }}
            />
            
            {/* Animated stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDelay: `${star.animationDelay}s`,
                        animationDuration: '3s',
                    }}
                />
            ))}
            
            {/* Shooting star */}
            <div className="absolute top-20 right-10 w-1 h-1 bg-white rounded-full animate-ping" 
                 style={{ animationDuration: '2s', animationDelay: '1s' }} />
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/20" />
        </div>
    );
};

export default StarryBackground;
