import React from "react";

const pricingPlans = [
    {
        name: "Basic",
        price: "$9.99/month",
        features: ["✔ 10GB Storage", "✔ Basic Support", "✔ 1 User"],
    },
    {
        name: "Pro",
        price: "$19.99/month",
        features: ["✔ 50GB Storage", "✔ Priority Support", "✔ 5 Users"],
    },
    {
        name: "Premium",
        price: "$29.99/month",
        features: ["✔ 100GB Storage", "✔ 24/7 Support", "✔ Unlimited Users"],
    },
];

const PricingTable = () => {
    return (
        <div className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 
                       hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                        <p className="text-2xl font-semibold text-blue-500 mt-2">
                            {plan.price}
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-sm">{feature}</li>
                            ))}
                        </ul>
                        <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 
                               rounded-lg hover:bg-blue-600 transition">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;
