import React from 'react'

function HeroSection() {
    return (
        <div className="relative h-screen flex items-center justify-center text-white">
            <video
                muted
                autoPlay
                loop
                className="absolute inset-0 w-full h-full border-2 object-cover"
            >
                <source src="../../public/174086-850404739.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
                <p className="mt-4 text-lg">Experience the best services with us.</p>
            </div>
        </div>
    )
}

export default HeroSection
