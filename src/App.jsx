import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import About from "./about/about";
import Offer from "./offer/offer";
import Testimonials from "./testimonials/testimonials";
import Treatment from "./treatment/treatment";
import Home from "./home/home";
// import { Suspense } from "react";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/treatment" element={<Treatment />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}
