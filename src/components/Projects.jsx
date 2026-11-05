import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

const imageModules = import.meta.glob("../assets/ProjectImages/*.png", {
    eager: true,
});

const routeMapping = {
    "nftworld-app.png": { route: "/nftworld", title: "NFT Marketplace" },
    "summarist-app.png": { route: "/summarist", title: "Summarist Library" },
    "skinstric-app.png": { route: "/skinstric", title: "Skinstric Skin Care" },
    "choghadiya-app.png": { route: "/choghadiya", title: "Choghadiya Timings" },
    "library-app.png": { route: "/library", title: "Digital Library" },
    "movies-app.png": { route: "/movies", title: "Movies App" },
};

// Map over routeMapping keys to preserve the custom configuration order
const images = Object.keys(routeMapping)
    .map((filename, index) => {
        // Find the matching file path from the asset glob
        const matchingPath = Object.keys(imageModules).find((path) =>
            path.endsWith(filename),
        );

        // If the image file doesn't exist, skip rendering it safely
        if (!matchingPath) return null;

        const config = routeMapping[filename];

        return {
            id: index,
            url: imageModules[matchingPath].default,
            alt: config.title,
            route: config.route,
            title: config.title,
        };
    })
    .filter(Boolean); // Clean up missing entries

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const itemsToShow = 4;

    const maxIndex = Math.max(0, images.length - itemsToShow);

    const totalDots = maxIndex + 1; // Total number of dots based on the maximum index

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    return (
        <div className="carousel-wrapper">
            <button
                onClick={prevSlide}
                className="nav-btn prev-btn"
                aria-label="Previous"
            >
                ❮
            </button>

            {/* Main Track & Dots Content Area */}
            <div className="carousel-main-content">
                <div className="carousel-container">
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                        }}
                    >
                        {images.map((img) => (
                            <div
                                key={img.id}
                                className="carousel-card"
                                onClick={() => navigate(img.route)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="image-relative-container">
                                    <img
                                        src={img.url}
                                        alt={img.alt}
                                        className="carousel-image"
                                    />
                                    <h3 className="carousel-heading">
                                        {img.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Positioned directly under the track inside the main content area */}
                {totalDots > 1 && (
                    <div className="carousel-dots">
                        {Array.from({ length: totalDots }).map((_, index) => (
                            <button
                                key={index}
                                className={`dot-btn ${currentIndex === index ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide step ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <button
                onClick={nextSlide}
                className="nav-btn next-btn"
                aria-label="Next"
            >
                ❯
            </button>
        </div>
    );
}
