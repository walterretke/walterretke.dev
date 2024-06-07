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
            Walter M. Retke
          </h1>
          <p className="mt-6 text-xl sm:text-2xl leading-8 text-white">
            Desenvolvedor de Aplicativos Freelancer
            <br />
            Freelancer
            <br />
            Programador PHP, Laravel
            <br />
            <TypeComponent />
          </p>
          <div className="mt-10 flex justify-center gap-x-4 sm:gap-x-6">
            <a
              href="#"
              className="rounded-md bg-orange-600 px-4 py-2.5 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Quer fazer um projeto?
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
