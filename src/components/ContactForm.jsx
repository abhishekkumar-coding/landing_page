import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 my-10 max-w-md mx-auto bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-xl">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
  
  <div className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
      onChange={handleChange}
    />
    
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
      onChange={handleChange}
    />
    
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none"
      onChange={handleChange}
    />
    
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300">
      Submit
    </button>
  </div>
</div>

  );
};

export default ContactForm;
