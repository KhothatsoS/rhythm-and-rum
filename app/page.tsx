"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/Button';
import { SectionWrapper } from './components/SectionWrapper';
import { ImageWithFallback } from './components/ImageWithFallback';
import { SEO } from './components/SEO';
import { Music, Users, Briefcase, Sparkles, Wine, Clock, MapPin } from 'lucide-react';

function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cocktails = [
    {
      name: 'Blue Note Mojito',
      description: 'A refreshing twist on a classic, infused with fresh mint and blue curaçao.',
      image: 'https://images.unsplash.com/photo-1690921822670-5929218ab41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2ppdG8lMjBjb2NrdGFpbCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTgzMTcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Sax & Spice',
      description: 'A bold blend of whiskey, ginger, and exotic spices for the adventurous palate.',
      image: 'https://images.unsplash.com/photo-1767745455688-49391131f751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlza2V5JTIwY29ja3RhaWwlMjBsdXh1cnklMjBiYXJ8ZW58MXx8fHwxNzcxODMxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Midnight in Havana',
      description: 'Dark rum, espresso, and a hint of vanilla bean. Smooth, deep, unforgettable.',
      image: 'https://images.unsplash.com/photo-1767745455688-49391131f751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29ja3RhaWwlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcxODMxNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'The Velvet Pour',
      description: 'Champagne, elderflower, and rose water create an elegant, floral masterpiece.',
      image: 'https://images.unsplash.com/photo-1748674749819-60e93fb6f1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGNvY2t0YWlsJTIwZWxlZ2FudCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzE4MzE3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Private Events',
      description: 'Intimate gatherings transformed into unforgettable experiences with curated cocktails and live jazz.'
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: 'Weddings',
      description: 'Elevate your special day with sophisticated cocktail service and ambient saxophone performances.'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with premium bar experiences and refined musical atmosphere.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Pop-Ups & Residencies',
      description: 'Collaborative events bringing rhythm and rum to your venue or curated location.'
    }
  ];

  const musicOptions = [
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Solo Sax Ambience',
      description: 'Smooth, soulful saxophone creating the perfect atmosphere for conversations and connections.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'DJ + Sax Fusion',
      description: 'Modern beats meet live saxophone for a dynamic, contemporary jazz experience.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Curated Jazz Atmosphere',
      description: 'Full production with carefully selected tracks and live performances throughout your event.'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwamF6eiUyMHNheG9waG9uZSUyMGxvdW5nZXxlbnwxfHx8fDE3NzE4MzE3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1758587421184-339f385900ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBldmVudCUyMG5pZ2h0JTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzE4MzE3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1758526348463-08177c90e51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBtaXhpbmclMjBjb2NrdGFpbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE3ODg4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1768777270882-9f74939fee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHdlZGRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MTgzMTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1691067987422-befcaaaf3e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwcGFydHklMjBlbGVnYW50JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcxODMxNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1768508950719-4d76978fdf44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGVsZWdhbnQlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3MTgzMTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  return (
    <div className="bg-[#0D0D0D]">
      <SEO />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwamF6eiUyMHNheG9waG9uZSUyMGxvdW5nZXxlbnwxfHx8fDE3NzE4MzE3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Jazz Lounge Atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/50 to-[#0D0D0D]"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl mb-6 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Where Jazz Meets the Pour.
          </h1>
          <p 
            className="text-xl md:text-2xl mb-12 text-[#F5F5F5]/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Crafted cocktails. Curated sound. Unforgettable atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/booking">
              Book The Experience
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('cocktails')?.scrollIntoView({ behavior: 'smooth' })}>
              View Signature Drinks
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <SectionWrapper className="bg-gradient-to-b from-[#0D0D0D] to-[#0F2E2E]/30">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          {...fadeInUp}
        >
          <h2 
            className="text-4xl md:text-5xl mb-6 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            An Experience Beyond the Ordinary
          </h2>
          <p 
            className="text-lg md:text-xl text-[#F5F5F5]/80 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Rhythm & Rum Co. brings together the timeless elegance of live jazz with the artistry of premium cocktail service. 
            We create immersive experiences for private events, weddings, and corporate functions—where every pour is perfected, 
            and every note sets the mood. From intimate gatherings to grand celebrations, we curate atmosphere.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Signature Drinks Section */}
      <SectionWrapper id="cocktails" className="bg-[#0F2E2E]/20">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Signature Cocktails
          </h2>
          <p 
            className="text-lg text-[#F5F5F5]/70"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Each drink is a composition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={cocktail.name}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <ImageWithFallback
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-60"></div>
              </div>
              <h3 
                className="text-xl mb-2 text-[#C6A75E]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {cocktail.name}
              </h3>
              <p 
                className="text-[#F5F5F5]/70 text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {cocktail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Music Experience Section */}
      <SectionWrapper className="bg-gradient-to-b from-[#0D0D0D] to-[#4B0F1A]/20">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The Sound of Sophistication
          </h2>
          <p 
            className="text-lg text-[#F5F5F5]/70"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Live saxophone performances tailored to your event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {musicOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className="text-center p-8 bg-[#0D0D0D]/40 rounded-lg border border-[#C6A75E]/20 hover:border-[#C6A75E]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4 text-[#C6A75E]">
                {option.icon}
              </div>
              <h3 
                className="text-xl mb-3 text-[#C6A75E]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {option.title}
              </h3>
              <p 
                className="text-[#F5F5F5]/70"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper className="bg-[#0F2E2E]/30">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Services
          </h2>
          <p 
            className="text-lg text-[#F5F5F5]/70"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Bespoke experiences for every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-8 bg-[#0D0D0D]/60 rounded-lg border border-[#C6A75E]/20 hover:shadow-[0_0_30px_rgba(198,167,94,0.2)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-[#C6A75E] mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 
                    className="text-2xl mb-3 text-[#C6A75E]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-[#F5F5F5]/70 mb-4"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Gallery Section */}
      <SectionWrapper className="bg-[#0D0D0D]">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Moments Captured
          </h2>
          <p 
            className="text-lg text-[#F5F5F5]/70"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A glimpse into our atmosphere
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ImageWithFallback
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" href="/gallery">
            View Full Gallery
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-b from-[#0D0D0D] via-[#4B0F1A]/30 to-[#0D0D0D]">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          {...fadeInUp}
        >
          <h2 
            className="text-4xl md:text-6xl mb-8 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Let's Set The Mood For Your Next Event.
          </h2>
          <p 
            className="text-lg md:text-xl mb-10 text-[#F5F5F5]/80"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Whether it's an intimate gathering or a grand celebration, we'll create an unforgettable atmosphere.
          </p>
          <Button variant="primary" size="lg" href="/booking">
            Secure Your Date
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

export default Home;