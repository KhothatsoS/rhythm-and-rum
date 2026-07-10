"use client"

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import "./app/styles/globals.css"

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0D0D0D]" style={{ fontFamily: 'var(--font-sans)' }}>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}