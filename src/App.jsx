import "./App.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
