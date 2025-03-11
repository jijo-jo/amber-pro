import React from "react";
import Navbar from "../components/homecomponent/Navbar";
import HeroSection from "../components/homecomponent/HeroSession";
import ContactForm from "../components/homecomponent/ContactForm";
import OfficeSession from "../components/homecomponent/OfficeSession";
import Smartdashboard from "../components/homecomponent/Smartdashbord";
import ControllerPage from "../components/homecomponent/ControllerPage";
import officeImage from "../assests/officeimage.jpeg"

const HomePage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar />
            <main className="flex flex-col items-center justify-center">
                <HeroSection />
                <OfficeSession
                    title="Curiously Home"
                    description="A Curiousfly Home is a seamlessly automated living space designed for ultimate comfort, convenience, and efficiency. Every element is crafted to provide a luxurious and intuitive living experience, making your home smarter, safer, and more efficient."
                    buttonText="Explore"
                    backgroundImage={officeImage}
                />
                <ControllerPage/>
                <Smartdashboard/>
                <ContactForm />
                
            </main>
        </div>
    );
};

export default HomePage;
