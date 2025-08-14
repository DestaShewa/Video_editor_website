// This is the complete and final code for: app/(admin)/services-manager/page.tsx

"use client";

import { useState, useEffect, FormEvent } from "react";

interface Service {
  id: number;
  name: string;
  description: string;
  price_range: string;
  features: string[];
}

export default function ServicesManagerPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price_range: "",
    features: "",
  });

  const fetchServices = async () => {
    const res = await fetch("/api/services");
    if (!res.ok) {
      console.error("Failed to fetch services");
      setServices([]); // Set to empty array on failure
      return;
    }
    const data = await res.json();
    const parsedData = data.map((service: Service) => ({
      ...service,
      features: service.features
        ? JSON.parse(service.features as unknown as string)
        : [],
    }));
    setServices(parsedData);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddService = async (e: FormEvent) => {
    e.preventDefault();
    const featuresArray = newService.features
      .split(",")
      .map((item) => item.trim());
    const res = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newService, features: featuresArray }),
    });
    if (res.ok) {
      fetchServices();
      setNewService({
        name: "",
        description: "",
        price_range: "",
        features: "",
      });
    } else {
      alert("Failed to add service");
    }
  };

  const handleDeleteService = async (id: number) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    const res = await fetch(`/api/services/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchServices();
    } else {
      alert("Failed to delete service");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Services Manager</h1>
      <div className="mb-12 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          Add New Service
        </h2>
        <form onSubmit={handleAddService} className="space-y-4">
          <input
            name="name"
            value={newService.name}
            onChange={handleInputChange}
            placeholder="Service Name"
            required
            className="w-full bg-gray-700 p-2 rounded-md"
          />
          <textarea
            name="description"
            value={newService.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
            className="w-full bg-gray-700 p-2 rounded-md"
            rows={3}
          ></textarea>
          <input
            name="price_range"
            value={newService.price_range}
            onChange={handleInputChange}
            placeholder="Price Range (e.g., $500 - $2,500)"
            required
            className="w-full bg-gray-700 p-2 rounded-md"
          />
          <input
            name="features"
            value={newService.features}
            onChange={handleInputChange}
            placeholder="Features (comma-separated)"
            required
            className="w-full bg-gray-700 p-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Add Service
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          Current Services
        </h2>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl">{service.name}</h3>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
                >
                  Delete
                </button>
              </div>
              <p className="text-gray-400 mt-2">{service.description}</p>
              <p className="font-semibold mt-2">{service.price_range}</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
