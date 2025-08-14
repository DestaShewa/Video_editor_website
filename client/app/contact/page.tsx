// This is the complete and final code for: app/contact/page.tsx

"use client"; // This marks the component as a Client Component

import { useState } from "react"; // Import useState for managing form state

export default function ContactPage() {
  // State for each form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  // State for managing the submission status
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true);
    setStatusMessage("Sending...");
    setIsError(false);

    try {
      // THE ONLY CHANGE IS HERE: We now use a relative URL to call our Next.js API route.
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          project_details: projectDetails,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // If the server responds with an error status (e.g., 500)
        throw new Error(
          result.message || "Something went wrong on the server."
        );
      }

      // If submission is successful
      setIsError(false);
      setStatusMessage("Thank you! Your message has been sent successfully.");
      // Clear the form fields
      setName("");
      setEmail("");
      setProjectDetails("");
    } catch (error: unknown) {
      setIsError(true);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.";
      setStatusMessage(errorMessage);
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">
          Contact Me
        </h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          Have a project in mind? Let talk. Fill out the form below to get
          started.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          {/* Name Input */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>

          {/* Project Details Textarea */}
          <div className="mb-6">
            <label
              htmlFor="project_details"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Tell me about your project
            </label>
            <textarea
              id="project_details"
              rows={5}
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              required
              className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Status Message Display */}
          {statusMessage && (
            <p
              className={`text-center mt-4 text-sm ${
                isError ? "text-red-400" : "text-green-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
