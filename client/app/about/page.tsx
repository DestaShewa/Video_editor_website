// This is the complete code for app/about/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">
          {/* Client Photo */}
          <div className="md:col-span-2">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/client-photo.jpg" // Make sure you have this image in your /public folder
                alt="A photo of the video editor"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Bio and Content */}
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
              About Me
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Hi, I am Eskindir. My journey into video editing began over 3
              years ago with a simple passion for storytelling. I discovered
              that the magic of a great story lies not just in the footage
              itself, but in the rhythm, pace, and emotion of the edit.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Today, I specialize in transforming raw footage from weddings,
              commercials, and corporate events into polished, cinematic
              masterpieces that captivate audiences. My goal is to understand
              your vision and bring it to life in a way that exceeds your
              expectations.
            </p>

            {/* My Toolkit Section */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">My Toolkit</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-gray-700 py-1 px-3 rounded-full">
                  Adobe Premiere Pro
                </span>
                <span className="bg-gray-700 py-1 px-3 rounded-full">
                  DaVinci Resolve
                </span>
                <span className="bg-gray-700 py-1 px-3 rounded-full">
                  Final Cut Pro
                </span>
                <span className="bg-gray-700 py-1 px-3 rounded-full">
                  Adobe After Effects
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
              >
                Let s Create Together
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
