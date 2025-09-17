import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatsappButton from "@/components/WhatsappButton";
import AchievementsSection from "@/components/AchievementsSection";
import StacksCard from "@/components/StacksCard";
import CertificationsSection from "@/components/CertificationsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import type { ProjectCardProps } from "@/components/ProjectsSection";

export default function Home() {
  const projects: ProjectCardProps[] = [
    // Professional Projects - Featured
    {
      title: "Enterprise Goal Management System",
      description: "Led the complete architectural transformation of a corporate goal-setting system, migrating from legacy SAP platform to modern cloud-native microservices architecture. Implemented scalable RESTful APIs, optimized database queries, and created a comprehensive Design System with reusable components.",
      technologies: ["Java 17", "Spring Boot", "Next.js", "React", "TypeScript", "PostgreSQL", "Kubernetes", "Docker", "Keycloak"],
      company: "WEG",
      period: "Aug 2024 - Jun 2025",
      type: "professional",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "E-commerce & Sales Platform (EASY)",
      description: "Developed and maintained critical e-commerce systems handling high-traffic sales operations. Built robust microservices architecture ensuring scalability and resilience, while providing expert technical support for business continuity in production environments.",
      technologies: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "Docker", "Kubernetes", "MySQL"],
      company: "Current Role",
      period: "Jun 2025 - Present",
      type: "professional",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Multi-Platform Application Suite",
      description: "Architected and developed comprehensive web applications using modern full-stack technologies. Managed containerization and orchestration while implementing performance optimizations and maintaining system stability across multiple platforms.",
      technologies: ["Java", "Spring Boot", "PHP", "Laravel", "Next.js", "Vue.js", "Docker", "Kubernetes", "CI/CD"],
      company: "Rauzee",
      period: "Jan 2024 - Aug 2024",
      type: "professional",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "AWS Cloud Architecture & Deployment",
      description: "Designed and implemented cloud-native applications on AWS infrastructure. Optimized resource allocation, implemented auto-scaling solutions, and established cost-effective deployment strategies with high availability and disaster recovery capabilities.",
      technologies: ["AWS EC2", "AWS RDS", "AWS Lambda", "AWS S3", "CloudFormation", "Docker", "Kubernetes", "Jenkins"],
      type: "professional",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400"
    },
    // Personal Projects - Secondary
    {
      title: "E-commerce Python Flask",
      description: "Full-featured e-commerce application built with Python Flask framework, demonstrating backend development skills and API design patterns.",
      technologies: ["Python", "Flask", "SQLAlchemy", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/walterretke/flask-ecommerce-app",
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "personal"
    },
    {
      title: "API Next.js MongoDB",
      description: "Modern API implementation using Next.js with MongoDB integration, showcasing full-stack JavaScript development capabilities.",
      technologies: ["Next.js", "MongoDB", "Node.js", "React", "JavaScript"],
      link: "https://github.com/walterretke/api-next-mongodb",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*gdnfi-V2lfLbE-tz8DOrkw.png",
      type: "personal"
    },
    {
      title: "Spring Boot RESTful API Starter",
      description: "Starter project for building production-ready REST APIs with Spring Boot, featuring layered architecture, JWT auth, exception handling, and test coverage.",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Testcontainers", "Docker"],
      link: "https://github.com/walterretke/spring-boot-rest-starter",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1358/1*SoJOoRqbFp9fvNILpl4JNw.jpeg",
      type: "personal"
    }
  ];

  return (
    <div>
      <DefaultLayout>
        <WhatsappButton />
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <StacksCard />
        <CertificationsSection />
        <ServicesSection />
        <ProjectsSection projects={projects} />
      </DefaultLayout>
    </div>
  );
}