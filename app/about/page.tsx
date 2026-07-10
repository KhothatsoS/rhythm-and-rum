"use client";

import React from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SEO } from '../components/SEO';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#0D0D0D] pt-20">
      <SEO 
        title="About Us" 
        description="Discover the story behind Rhythm & Rum Co. - where exceptional cocktails meet live jazz performances for unforgettable event experiences."
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwamF6eiUyMHNheG9waG9uZSUyMGxvdW5nZXxlbnwxfHx8fDE3NzE4MzE3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About Rhythm & Rum Co."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 to-[#0D0D0D]"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 
            className="text-5xl md:text-7xl text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Story
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl mb-6 text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Where Rhythm Meets the Pour
            </h2>
            <p 
              className="text-lg text-[#F5F5F5]/80 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Rhythm & Rum Co. was born from a simple belief: the best moments in life are 
              elevated by exceptional drinks and the right soundtrack. We're not just a bar 
              service or a band for hire—we're curators of atmosphere, architects of mood, 
              and believers in the transformative power of a perfectly poured cocktail 
              accompanied by live jazz.
            </p>
          </motion.div>

          <motion.div 
            className="relative h-[400px] rounded-lg overflow-hidden my-12"
            {...fadeInUp}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758526348463-08177c90e51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBtaXhpbmclMjBjb2NrdGFpbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE3ODg4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cocktail Craftsmanship"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 
              className="text-2xl md:text-3xl mb-4 text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The Craft Behind the Pour
            </h3>
            <p 
              className="text-lg text-[#F5F5F5]/80 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Every cocktail we create is a composition. We source premium spirits, fresh 
              ingredients, and craft each drink with precision and passion. From classic 
              cocktails reimagined to signature creations, our menu is designed to surprise, 
              delight, and complement the sophisticated ambiance we create.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 
              className="text-2xl md:text-3xl mb-4 text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The Soul of Jazz
            </h3>
            <p 
              className="text-lg text-[#F5F5F5]/80 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Jazz is the heartbeat of Rhythm & Rum Co. Whether it's the smooth tones of a 
              solo saxophone, the energy of a DJ and sax fusion, or a full curated jazz 
              experience, music is integral to every event we create. We understand that the 
              right sound doesn't just fill the space—it transforms it.
            </p>
          </motion.div>

          <motion.div 
            className="relative h-[400px] rounded-lg overflow-hidden my-12"
            {...fadeInUp}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758587421184-339f385900ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBldmVudCUyMG5pZ2h0JTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzE4MzE3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Live Music Performance"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 
              className="text-2xl md:text-3xl mb-4 text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Experience Over Everything
            </h3>
            <p 
              className="text-lg text-[#F5F5F5]/80 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              We work with clients who value atmosphere, elegance, and authenticity. From 
              intimate private gatherings to grand weddings and high-profile corporate events, 
              we tailor every detail to fit the vision. Our approach is collaborative, our 
              service is seamless, and our goal is always the same: to create moments that 
              linger long after the last note fades.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 
              className="text-2xl md:text-3xl mb-4 text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Why Choose Us
            </h3>
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#F5F5F5]/80"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <div className="p-6 bg-[#0F2E2E]/30 rounded-lg border border-[#C6A75E]/20">
                <h4 className="text-xl text-[#C6A75E] mb-2">Premium Quality</h4>
                <p>We use only the finest spirits and ingredients for every cocktail we craft.</p>
              </div>
              <div className="p-6 bg-[#0F2E2E]/30 rounded-lg border border-[#C6A75E]/20">
                <h4 className="text-xl text-[#C6A75E] mb-2">Live Entertainment</h4>
                <p>Authentic jazz performances that elevate your event atmosphere.</p>
              </div>
              <div className="p-6 bg-[#0F2E2E]/30 rounded-lg border border-[#C6A75E]/20">
                <h4 className="text-xl text-[#C6A75E] mb-2">Bespoke Service</h4>
                <p>Every event is tailored to your vision, preferences, and style.</p>
              </div>
              <div className="p-6 bg-[#0F2E2E]/30 rounded-lg border border-[#C6A75E]/20">
                <h4 className="text-xl text-[#C6A75E] mb-2">Professional Team</h4>
                <p>Experienced bartenders and musicians dedicated to excellence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-b from-[#0D0D0D] to-[#4B0F1A]/20">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <h2 
            className="text-3xl md:text-5xl mb-6 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to Experience the Difference?
          </h2>
          <p 
            className="text-lg mb-8 text-[#F5F5F5]/80"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Let's create something extraordinary together.
          </p>
          <Button variant="primary" size="lg" href="/booking">
            Book Your Event
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

export default About;