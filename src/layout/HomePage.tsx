import React from "react";
import Navbar from "../components/homecomponent/Navbar";
import HeroSection from "../components/homecomponent/HeroSession";
import ContactForm from "../components/homecomponent/ContactForm";
import OfficeSession from "../components/homecomponent/OfficeSession";
import Smartdashboard from "../components/homecomponent/Smartdashbord";
import ControllerPage from "../components/homecomponent/ControllerPage";

const HomePage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar />
            <main className="flex flex-col items-center justify-center px-4">
                <HeroSection />
                <OfficeSession
                    title="Curiously Home"
                    description="A Curiously Home is a seamlessly automated living space designed for ultimate comfort, convenience, and efficiency..."
                    buttonText="Explore"
                    backgroundImage="/officeimage.jpeg"
                />
                <ControllerPage/>
                <Smartdashboard/>
                <ContactForm />
                
            </main>
        </div>
    );
};

export default HomePage;
