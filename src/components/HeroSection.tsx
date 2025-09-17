'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Header from './Header';
import TypeComponent from './TypeComponent';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.div>
      <Header />
      <div
        className="relative isolate px-6 pt-24 lg:px-8"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=3439&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Walter M. Retke Manske
          </h1>
          <p className="mt-6 text-xl sm:text-2xl leading-8 text-white">
            Software Engineer
            <br />
            Java | Spring Boot | AWS | Kubernetes
            <br />
            3+ Years Building Scalable Solutions
            <br />
            <TypeComponent />
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-200">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              AWS Certification Candidate
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a8.034 8.034 0 01-2.428 2.078 1 1 0 11-.894-1.789 6.067 6.067 0 001.596-1.187A18.902 18.902 0 013.304 8.106 1 1 0 114.696 6.894a16.91 16.91 0 00.73 2.19 16.925 16.925 0 00.673-2.19 1 1 0 01.943-.894H8V3a1 1 0 011-1zM13 8a1 1 0 011-1h1a1 1 0 110 2h-1v2a1 1 0 11-2 0V9h-1a1 1 0 110-2h1a1 1 0 011 1z" clipRule="evenodd" />
              </svg>
              English B2 Level
            </span>
          </div>
          <div className="mt-10 flex justify-center gap-x-4 sm:gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-orange-600 px-4 py-2.5 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}