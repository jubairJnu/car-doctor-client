import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center space-y-3 mb-3">
        <h2 className='text-2xl text-orange-600 font-bold  my-3'>Services</h2>
        <h1 className="text-4xl font-bold ">Our Service Area</h1>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
      {
        services.map(service=> <ServiceCard 
          key={service._id}
          service={service}></ServiceCard>)
      }
      </div>

    </div>
  );
};

export default Services;