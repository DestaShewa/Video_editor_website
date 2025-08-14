// This is the complete, updated code for app/portfolio/page.tsx

import Image from "next/image"; // <--- CHANGE #1: Import the Image component

interface PortfolioVideo {
  id: number;
  title: string;
  category: string;
  video_url: string;
  thumbnail_url: string;
}

async function getPortfolioVideos(): Promise<PortfolioVideo[]> {
  try {
    const res = await fetch("http://localhost:3001/api/portfolio", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching portfolio videos:", error);
    return [];
  }
}

export default async function PortfolioPage() {
  const videos = await getPortfolioVideos();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">My Work</h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          A selection of projects that showcase my skills in editing, color, and
          storytelling.
        </p>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 group"
              >
                <a
                  href={video.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full h-48">
                    {" "}
                    {/* Added relative positioning and height */}
                    {/* --- CHANGE #2: Replaced <img> with <Image /> --- */}
                    <Image
                      src={video.thumbnail_url}
                      alt={`Thumbnail for ${video.title}`}
                      fill // 'fill' makes the image cover the parent div
                      style={{ objectFit: "cover" }} // 'cover' maintains aspect ratio
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-blue-400 mb-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-400">{video.category}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No videos found. Please check back later.
          </p>
        )}
      </div>
    </div>
  );
}
