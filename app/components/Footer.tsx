import React from 'react';
import { Link } from 'react-router';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book Now', path: '/booking' }
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#C6A75E]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-serif text-[#C6A75E] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Rhythm & Rum Co.
            </h3>
            <p className="text-[#F5F5F5]/70" style={{ fontFamily: 'var(--font-sans)' }}>
              Where Jazz Meets the Pour.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#C6A75E] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#F5F5F5]/70 hover:text-[#C6A75E] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C6A75E] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Connect</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/rhythmandrumco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F5F5F5]/70 hover:text-[#C6A75E] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Instagram size={20} />
                <span>@rhythmandrumco</span>
              </a>
              <a
                href="https://wa.me/27XXXXXXXXX?text=Hi%20Rhythm%20%26%20Rum%20Co%2C%20I%20would%20like%20to%20book%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F5F5F5]/70 hover:text-[#C6A75E] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:bookings@rhythmandrumco.co.za"
                className="flex items-center gap-2 text-[#F5F5F5]/70 hover:text-[#C6A75E] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Mail size={20} />
                <span>bookings@rhythmandrumco.co.za</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#C6A75E]/20 pt-8 text-center">
          <p className="text-[#F5F5F5]/50 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2026 Rhythm & Rum Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
