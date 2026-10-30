import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

const imageModules = import.meta.glob("../assets/ProjectImages/*.png", {
    eager: true,
});

const routeMapping = {
    "movies-app.png": { route: "/movies", title: "Movies App" },
    "netflix-clone.png": { route: "/netflix", title: "Netflix Clone" },
    "spotify-clone.png": { route: "/spotify", title: "Spotify Clone" },
    "library-app.png": { route: "/library", title: "Digital Library" },
    "nftworld-app.png": { route: "/nftworld", title: "NFT Marketplace" },
    "summarist-app.png": { route: "/summarist", title: "Summarist Library" },
    "choghadiya-app.png": { route: "/choghadiya", title: "Choghadiya Timings" },
    "skinstric-app.png": { route: "/skinstric", title: "Skinstric Skin Care" },
};

const images = Object.keys(imageModules).map((path, index) => {
    const filename = path.split("/").pop();

    const config = routeMapping[filename] || {
        route: "/",
        title: `Project ${index + 1}`,
    };

    return {
        id: index,
        url: imageModules[path].default,
        alt: config.title,
        route: config.route,
        title: config.title,
    };
});

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const itemsToShow = 4;

    const maxIndex = Math.max(0, images.length - itemsToShow);

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
