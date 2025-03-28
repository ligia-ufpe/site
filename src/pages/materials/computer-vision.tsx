import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { View, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComputerVisionPage() {
  const videos = [
    {
      title: "Introduction to Computer Vision with PyTorch",
      duration: "45:20",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
      description: "Learn the basics of computer vision and how to implement basic models using PyTorch."
    },
    {
      title: "Image Classification Techniques",
      duration: "38:15",
      thumbnail: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800",
      description: "Explore different approaches to image classification using convolutional neural networks."
    },
    {
      title: "Object Detection Systems",
      duration: "52:30",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      description: "Build and train object detection models using modern architectures."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Computer Vision with PyTorch - Ligia UFPE</title>
        <meta
          name="description"
          content="Step-by-step video series on implementing computer vision models using PyTorch."
        />
      </Helmet>
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/materials"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Materials
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <View className="w-12 h-12 text-[#FF4B1F]" />
                <h1 className="text-4xl font-bold">Computer Vision with PyTorch</h1>
              </div>

              <p className="text-xl text-gray-300 mb-12">
                A comprehensive video series covering computer vision implementation using PyTorch,
                from basic concepts to advanced applications.
              </p>

              <div className="grid gap-8">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl overflow-hidden"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-full text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                      <p className="text-gray-400">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}