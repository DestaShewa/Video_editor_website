// This is the final code for app/(admin)/portfolio-manager/page.tsx

"use client";

import { useState, useEffect, FormEvent } from "react";

interface PortfolioVideo {
  id: number;
  title: string;
  category: string;
  video_url: string;
  thumbnail_url: string;
}

export default function PortfolioManagerPage() {
  const [videos, setVideos] = useState<PortfolioVideo[]>([]);
  const [newVideo, setNewVideo] = useState({
    title: "",
    category: "",
    video_url: "",
    thumbnail_url: "",
  });

  const fetchVideos = async () => {
    const res = await fetch("/api/portfolio"); // This now calls our new Next.js route handler
    const data = await res.json();
    setVideos(data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewVideo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddVideo = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVideo),
    });

    if (res.ok) {
      fetchVideos(); // Refetch all videos to update the list
      setNewVideo({
        title: "",
        category: "",
        video_url: "",
        thumbnail_url: "",
      });
    } else {
      alert("Failed to add video");
    }
  };

  const handleDeleteVideo = async (id: number) => {
    if (!confirm("Are you sure you want to delete this video?")) return;
    const res = await fetch(`/api/portfolio/${id}`, { method: "DELETE" });

    if (res.ok) {
      fetchVideos(); // Refetch all videos to update the list
    } else {
      alert("Failed to delete video");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Portfolio Manager</h1>
      <div className="mb-12 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Add New Video</h2>
        <form
          onSubmit={handleAddVideo}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            name="title"
            value={newVideo.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
            className="bg-gray-700 p-2 rounded-md"
          />
          <input
            name="category"
            value={newVideo.category}
            onChange={handleInputChange}
            placeholder="Category"
            required
            className="bg-gray-700 p-2 rounded-md"
          />
          <input
            name="video_url"
            value={newVideo.video_url}
            onChange={handleInputChange}
            placeholder="Video URL (embed)"
            required
            className="bg-gray-700 p-2 rounded-md"
          />
          <input
            name="thumbnail_url"
            value={newVideo.thumbnail_url}
            onChange={handleInputChange}
            placeholder="Thumbnail URL"
            required
            className="bg-gray-700 p-2 rounded-md"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Add Video
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          Current Videos
        </h2>
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.category}</p>
              </div>
              <button
                onClick={() => handleDeleteVideo(video.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
