import React from "react";
import HeroSection from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";
import PricingTable from "./components/PricingTable";
import UserList from "./components/UserList";
// import ServiceCard from "./components/ServiceCard";
// import UserList from "./components/UserList";
// import ContactForm from "./components/ContactForm";
// import PricingTable from "./components/PricingTable";

function App() {
  return (
    <div>
      <HeroSection />
      <ServiceCard/>
      <UserList/>
      <PricingTable/>
      <ContactForm/>
    </div>
  );
}

export default App;
