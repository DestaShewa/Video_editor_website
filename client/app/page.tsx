// This is the complete code for app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important for iOS devices
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          {/* Make sure the path matches your video file in the public folder */}
          <source src="/hero-reel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 text-center text-white p-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            Turning Raw Footage into Cinematic Masterpieces
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Professional Video Editing for Any Project
          </p>
          <Link
            href="/portfolio"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            View My Work
          </Link>
        </div>

        {/* Optional: Add a dark overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
      </div>

      {/* Services Preview Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-2">What I Do</h2>
          <p className="text-lg text-gray-400 mb-12">
            I offer a range of services to bring your vision to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                Video Editing
              </h3>
              <p className="text-gray-300">
                From short clips to full-length features, I craft compelling
                narratives.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                Color Grading
              </h3>
              <p className="text-gray-300">
                Enhancing the mood and tone of your footage with professional
                color correction.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                Motion Graphics
              </h3>
              <p className="text-gray-300">
                Adding dynamic titles, lower thirds, and animations to your
                videos.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                Social Media Content
              </h3>
              <p className="text-gray-300">
                Creating engaging, optimized content for platforms like
                Instagram and TikTok.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
