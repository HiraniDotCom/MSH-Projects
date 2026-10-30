import { Route, Routes } from "react-router-dom";
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
    return (
        <div className="app-layout">
            <Nav />
            <main className="main-route-content">
                <Routes>
                    <Route path="/" element={<Header />} />;
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
            <Footer />
        </div>
    );
};

export default App;
