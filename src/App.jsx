import { useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProjMovies from "./components/ProjMovies";
import ProjNetflix from "./components/ProjNetflix";
import ProjSpotify from "./components/ProjSpotify";
import ProjLibrary from "./components/ProjLibrary";
import ProjNftWorld from "./components/ProjNftWorld";
import ProjSummarist from "./components/ProjSummarist";
import ProjChoghadiya from "./components/ProjChoghadiya";
import ProjSkinstric from "./components/ProjSkinstric";

const App = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const contactOpenerRef = useRef(null);
    const mainRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const openContact = useCallback((opener) => {
        contactOpenerRef.current = opener;
        setIsContactOpen(true);
    }, []);

    const handleOpenContact = useCallback((opener) => {
        openContact(opener);
        if (location.pathname !== "/") {
            navigate("/");
        }
    }, [location.pathname, navigate, openContact]);

    const closeContact = useCallback(() => setIsContactOpen(false), []);
    const previousPathRef = useRef(location.pathname);

    useEffect(() => {
        document.body.classList.toggle("modal--open", isContactOpen);

        return () => document.body.classList.remove("modal--open");
    }, [isContactOpen]);

    useEffect(() => {
        if (previousPathRef.current === location.pathname) {
            return;
        }

        previousPathRef.current = location.pathname;
        if (!isContactOpen) {
            mainRef.current?.focus();
        }
    }, [isContactOpen, location.pathname]);

    return (
        <div>
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <Nav onOpenContact={handleOpenContact} />
            <main id="main-content" ref={mainRef} tabIndex="-1">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Header
                                isModalOpen={isContactOpen}
                                onOpenContact={openContact}
                                onCloseContact={closeContact}
                                contactOpenerRef={contactOpenerRef}
                            />
                        }
                    />
                    <Route path="/projects" element={<Projects />} />;
                    <Route path="/movies" element={<ProjMovies />} />;
                    <Route path="/netflix" element={<ProjNetflix />} />;
                    <Route path="/spotify" element={<ProjSpotify />} />;
                    <Route path="/library" element={<ProjLibrary />} />;
                    <Route path="/nftworld" element={<ProjNftWorld />} />;
                    <Route path="/summarist" element={<ProjSummarist />} />;
                    <Route path="/choghadiya" element={<ProjChoghadiya />} />;
                    <Route path="/skinstric" element={<ProjSkinstric />} />;
                </Routes>
            </main>
            <Footer onOpenContact={handleOpenContact} />
        </div>
    );
};

export default App;
