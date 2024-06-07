import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatsappButton from "@/components/WhatsappButton";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
    return (
        <div>
            <DefaultLayout>
                <WhatsappButton />
                <HeroSection />
                <AboutSection />
                <ServicesSection />
            </DefaultLayout>
        </div>
    );
}