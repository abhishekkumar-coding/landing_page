import React from 'react'

function ServiceCard() {
    const services = [
        {
            title: 'Web Development',
            desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',

        },
        {
            title: 'Mobile Applications',
            desc: 'We develop mobile applications that truly stand out. ',

        },
        {
            title: 'UI/UX Design',
            desc: 'We create unique designs that are centered around the user experience.',

        },
        {
            title: 'Branding',
            desc: 'We help brands create a unique identity.',

        },
        {
            title: 'SEO',
            desc: 'We offer SEO services to improve your website’s visibility online.',

        },
        {
            title: 'Social Media Marketing',
            desc: 'We create and manage top-performing social media campaigns for businesses.',

        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
            {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    <p className="mt-2 text-gray-600">{service.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default ServiceCard