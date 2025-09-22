'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UploadPage() {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>('');

  const uploadVideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setError('');

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setVideoUrl(data.secure_url);
    } catch (err) {
      setError('Failed to upload video. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#030014] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#03001417] backdrop-blur-md z-50 px-10 py-4">
        <Link href="/" className="text-white hover:text-purple-500 transition-colors">
          ← Back to Home
        </Link>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Video Upload
          </h2>
          <p className="text-gray-300 mb-8">
            Share your amazing videos with the world
          </p>
        </div>

        <div className="bg-[#0300145e] backdrop-blur-md border border-[#7042f88b] p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-200 mb-2">Select Video File</label>
            <input
              type="file"
              accept="video/*"
              onChange={uploadVideo}
              disabled={isUploading}
              className="w-full px-4 py-2 rounded-md bg-[#0300145e] text-white
                       file:mr-4 file:py-2 file:px-4 file:rounded-md
                       file:border-0 file:text-sm file:font-semibold
                       file:bg-purple-500 file:text-white
                       hover:file:bg-purple-600 cursor-pointer disabled:opacity-50"
            />
          </div>

          {isUploading && (
            <div className="mb-4 text-purple-400 flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading video...
            </div>
          )}

          {error && (
            <div className="mb-4 text-red-400 text-center">
              {error}
            </div>
          )}

          {videoUrl && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Preview:</h3>
              <div className="relative rounded-lg overflow-hidden bg-black">
                <video 
                  controls 
                  className="w-full"
                  src={videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-4 p-4 bg-[#0300145e] rounded-lg">
                <p className="text-gray-300 break-all">
                  <span className="font-semibold text-purple-400">Video URL:</span> {videoUrl}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}