// This is the complete and CORRECTED code for app/services/page.tsx

import Link from "next/link";

interface Service {
  id: number;
  name: string;
  description: string;
  price_range: string;
  features: string | null;
}

async function getServices(): Promise<Service[]> {
  try {
    // NOTE: The URL must be absolute for server-side fetching
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${apiUrl}/api/services`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
  }
}

// This is a pure Server Component (no "use client")
export default async function ServicesPage() {
  const services = await getServices();
  const addOns = [
    {
      name: "4K Rendering",
      description:
        "Deliver your final video in stunning ultra-high definition.",
    },
    {
      name: "Rush Delivery",
      description:
        "Receive your final edit in half the standard delivery time.",
    },
    {
      name: "Custom Subtitling",
      description:
        "Manually transcribed and timed subtitles for maximum clarity.",
    },
    {
      name: "Motion Graphics Package",
      description: "Custom animated lower thirds, titles, and logos.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Services</h1>
          <p className="text-lg text-gray-400 mb-12">
            Tailored solutions to bring your creative vision to life. I offer a
            range of packages designed for quality, impact, and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.length === 0 ? (
            <p className="text-center col-span-2 text-gray-500">
              No services have been added yet.
            </p>
          ) : (
            services.map((service) => {
              const featuresList = service.features
                ? JSON.parse(service.features)
                : [];
              return (
                <div
                  key={service.id}
                  className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col"
                >
                  <h2 className="text-2xl font-bold text-blue-400 mb-3">
                    {service.name}
                  </h2>
                  <p className="text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>
                  {featuresList.length > 0 && (
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {featuresList.map((feature: string) => (
                          <li key={feature} className="flex items-center">
                            <svg
                              className="w-5 h-5 text-green-400 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="text-xl font-semibold mt-auto">
                    {service.price_range}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Add-Ons Section and CTA remain the same */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Optional Add-Ons</h2>
            <p className="text-lg text-gray-400 mb-12">
              Enhance your project with these premium extras.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn) => (
              <div
                key={addOn.name}
                className="bg-gray-800 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  {addOn.name}
                </h3>
                <p className="text-gray-300">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
