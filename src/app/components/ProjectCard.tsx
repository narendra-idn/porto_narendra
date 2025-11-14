import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Project } from "@/src/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const images =
    typeof project.image === "string" ? [project.image] : project.image;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCurrentIndex, setZoomCurrentIndex] = useState(0);
  const [isZoomSlideshowPlaying, setIsZoomSlideshowPlaying] = useState(true);
  const slideshowInterval = 3000;

  useEffect(() => {
    if (images.length <= 1 || !isSlideshowPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, slideshowInterval);

    return () => clearInterval(interval);
  }, [images.length, isSlideshowPlaying, isHovered]);

  useEffect(() => {
    if (!isZoomed || images.length <= 1 || !isZoomSlideshowPlaying) return;

    const interval = setInterval(() => {
      setZoomCurrentIndex((prev) => (prev + 1) % images.length);
    }, slideshowInterval);

    return () => clearInterval(interval);
  }, [isZoomed, images.length, isZoomSlideshowPlaying]);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    if (isZoomed) setZoomCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    if (isZoomed) setZoomCurrentIndex(prevIndex);
  };

  const toggleSlideshow = () => {
    setIsSlideshowPlaying(!isSlideshowPlaying);
  };

  const toggleZoomSlideshow = () => {
    setIsZoomSlideshowPlaying(!isZoomSlideshowPlaying);
  };

  const handleImageClick = () => {
    setZoomCurrentIndex(currentImageIndex);
    setIsZoomed(true);
    setIsZoomSlideshowPlaying(isSlideshowPlaying);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
    setIsSlideshowPlaying(isZoomSlideshowPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <Image
          src={images[currentImageIndex]}
          alt={project.title}
          fill
          className="object-cover cursor-pointer"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onClick={handleImageClick}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/project-placeholder.png";
          }}
        />

        {images.length > 1 && (
          <div className="absolute bottom-2 left-2 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSlideshow();
              }}
              className="bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              aria-label={
                isSlideshowPlaying ? "Pause slideshow" : "Play slideshow"
              }
            >
              {isSlideshowPlaying ? (
                <FaPause size={12} />
              ) : (
                <FaPlay size={12} />
              )}
            </button>
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition-colors"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition-colors"
            >
              <FaChevronRight size={16} />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}

        {project.featured && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
                <span className="text-sm">Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {isZoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleCloseZoom}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[zoomCurrentIndex]}
              alt={project.title}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/project-placeholder.png";
              }}
            />

            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-black/50 rounded-full p-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomCurrentIndex(
                      (prev) => (prev - 1 + images.length) % images.length
                    );
                  }}
                  className="text-white p-2 hover:bg-black/30 rounded-full"
                >
                  <FaChevronLeft size={20} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleZoomSlideshow();
                  }}
                  className="text-white p-2 hover:bg-black/30 rounded-full"
                >
                  {isZoomSlideshowPlaying ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} />
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomCurrentIndex((prev) => (prev + 1) % images.length);
                  }}
                  className="text-white p-2 hover:bg-black/30 rounded-full"
                >
                  <FaChevronRight size={20} />
                </button>
              </div>
            )}

            {images.length > 1 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {zoomCurrentIndex + 1}/{images.length}
              </div>
            )}

            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 p-2"
              onClick={handleCloseZoom}
            >
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
