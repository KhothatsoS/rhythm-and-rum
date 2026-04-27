import React from 'react';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { SectionWrapper } from '../components/SectionWrapper';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SEO } from '../components/SEO';

export function Gallery() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwamF6eiUyMHNheG9waG9uZSUyMGxvdW5nZXxlbnwxfHx8fDE3NzE4MzE3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Live Jazz Performance'
    },
    {
      src: 'https://images.unsplash.com/photo-1767745455688-49391131f751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29ja3RhaWwlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcxODMxNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Premium Cocktail'
    },
    {
      src: 'https://images.unsplash.com/photo-1768777270882-9f74939fee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHdlZGRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MTgzMTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Wedding Event'
    },
    {
      src: 'https://images.unsplash.com/photo-1758526348463-08177c90e51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBtaXhpbmclMjBjb2NrdGFpbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE3ODg4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Bartender Crafting Cocktails'
    },
    {
      src: 'https://images.unsplash.com/photo-1758587421184-339f385900ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBldmVudCUyMG5pZ2h0JTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzE4MzE3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Night Event Atmosphere'
    },
    {
      src: 'https://images.unsplash.com/photo-1690921822670-5929218ab41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2ppdG8lMjBjb2NrdGFpbCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTgzMTcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Mojito Cocktail'
    },
    {
      src: 'https://images.unsplash.com/photo-1691067987422-befcaaaf3e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwcGFydHklMjBlbGVnYW50JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcxODMxNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Private Party'
    },
    {
      src: 'https://images.unsplash.com/photo-1768508950719-4d76978fdf44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGVsZWdhbnQlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3MTgzMTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Corporate Event'
    },
    {
      src: 'https://images.unsplash.com/photo-1748674749819-60e93fb6f1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGNvY2t0YWlsJTIwZWxlZ2FudCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzE4MzE3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Tropical Cocktail'
    },
    {
      src: 'https://images.unsplash.com/photo-1767986012547-3fc29b18339f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRlY29yfGVufDF8fHx8MTc3MTgzMTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Wedding Reception'
    }
  ];

  return (
    <div className="bg-[#0D0D0D] pt-20">
      <SEO 
        title="Gallery" 
        description="Explore our gallery showcasing premium cocktails, live jazz performances, and unforgettable event moments from Rhythm & Rum Co."
      />
      {/* Hero Section */}
      <SectionWrapper>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 
            className="text-5xl md:text-7xl mb-6 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Gallery
          </h1>
          <p 
            className="text-xl text-[#F5F5F5]/80"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Moments captured from our events—where atmosphere, craft, and rhythm come together.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={1} gutter="16px" className="md:hidden">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p 
                  className="text-[#C6A75E] text-lg"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <Masonry columnsCount={2} gutter="16px" className="hidden md:block lg:hidden">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p 
                  className="text-[#C6A75E] text-lg"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <Masonry columnsCount={3} gutter="16px" className="hidden lg:block">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p 
                  className="text-[#C6A75E] text-lg"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </SectionWrapper>
    </div>
  );
}