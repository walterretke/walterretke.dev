import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatsappButton from "@/components/WhatsappButton";
import ServicesSection from "@/components/ServicesSection";
import StacksCard from "@/components/StacksCard";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const projects = [
    {
      title: "E-commerce Python Flask",
      description: "flask-ecommerce-app",
      githubLink: "https://github.com/walterretke/flask-ecommerce-app",
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Api Next Mongodb",
      description: "Api com next e mongodb",
      githubLink: "https://github.com/walterretke/api-next-mongodb",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*gdnfi-V2lfLbE-tz8DOrkw.png",
    },
    {
      title: "Crud Laravel Inertia Vue3",
      description: "Crud com Laravel e Inertia Vue3",
      githubLink: "https://github.com/walterretke/CRUD-Laravel-Inertia-Vue3",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1358/1*SoJOoRqbFp9fvNILpl4JNw.jpeg",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <WhatsappButton />
        <HeroSection />
        <AboutSection />
        <StacksCard />
        <ServicesSection />
        <ProjectsSection projects={projects} />
      </DefaultLayout>
    </div>
  );
}
