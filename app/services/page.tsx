import React from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SEO } from '../components/SEO';
import { Users, Wine, Briefcase, Sparkles, Music, Clock, MapPin } from 'lucide-react';

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Private Events',
      description: 'Transform your intimate gathering into an unforgettable experience. Whether it\'s a birthday celebration, anniversary, or exclusive soirée, we bring the perfect blend of sophisticated cocktails and live jazz to create an atmosphere your guests will remember.',
      features: [
        'Customized cocktail menu',
        'Live saxophone performances',
        'Professional bar setup',
        'Tailored music selection',
        'Flexible packages for any venue'
      ],
      image: 'https://images.unsplash.com/photo-1691067987422-befcaaaf3e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwcGFydHklMjBlbGVnYW50JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcxODMxNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: <Wine className="w-12 h-12" />,
      title: 'Weddings',
      description: 'Your wedding day deserves elegance and refinement. We provide premium cocktail service and ambient live music that complements your celebration without overwhelming it. From cocktail hour to reception, we curate the perfect atmosphere.',
      features: [
        'Signature wedding cocktails',
        'Champagne & wine service',
        'Elegant bar presentation',
        'Ceremony & reception music',
        'Coordination with wedding planners'
      ],
      image: 'https://images.unsplash.com/photo-1767986012547-3fc29b18339f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRlY29yfGVufDF8fHx8MTc3MTgzMTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Corporate Events',
      description: 'Impress clients, reward your team, or host a memorable corporate function with our refined cocktail and music experience. We understand the importance of professionalism paired with sophistication.',
      features: [
        'Brand-aligned cocktail menus',
        'Sophisticated jazz ambience',
        'Professional service staff',
        'Scalable for any event size',
        'Corporate branding options'
      ],
      image: 'https://images.unsplash.com/photo-1768508950719-4d76978fdf44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGVsZWdhbnQlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3MTgzMTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Pop-Ups & Residencies',
      description: 'Bring Rhythm & Rum Co. to your venue. We collaborate with restaurants, hotels, and event spaces to create recurring or one-time pop-up experiences that attract discerning clientele and elevate your brand.',
      features: [
        'Venue collaboration packages',
        'Weekly or monthly residencies',
        'Seasonal cocktail programs',
        'Marketing & promotional support',
        'Custom event concepts'
      ],
      image: 'https://images.unsplash.com/photo-1758587421184-339f385900ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBldmVudCUyMG5pZ2h0JTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzE4MzE3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="bg-[#0D0D0D] pt-20">
      <SEO 
        title="Services" 
        description="Premium cocktail service and live jazz for private events, weddings, corporate functions, and pop-ups. Bespoke experiences for every occasion."
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768777270882-9f74939fee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHdlZGRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MTgzMTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 to-[#0D0D0D]"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 
            className="text-5xl md:text-7xl mb-6 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Services
          </h1>
          <p 
            className="text-xl text-[#F5F5F5]/90"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Bespoke experiences for every occasion
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              {...fadeInUp}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="text-[#C6A75E] mb-4">
                  {service.icon}
                </div>
                <h2 
                  className="text-3xl md:text-4xl mb-4 text-[#C6A75E]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {service.title}
                </h2>
                <p 
                  className="text-lg text-[#F5F5F5]/80 mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] mt-2"></div>
                      <p 
                        className="text-[#F5F5F5]/70"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="md" href="/booking">
                  Book This Service
                </Button>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* What's Included Section */}
      <SectionWrapper className="bg-gradient-to-b from-[#0D0D0D] to-[#0F2E2E]/30">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What's Included
          </h2>
          <p 
            className="text-lg text-[#F5F5F5]/70"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Every package includes our signature touch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center p-8 bg-[#0D0D0D]/60 rounded-lg border border-[#C6A75E]/20"
            {...fadeInUp}
          >
            <div className="flex justify-center mb-4 text-[#C6A75E]">
              <Music className="w-10 h-10" />
            </div>
            <h3 
              className="text-xl mb-3 text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Live Music
            </h3>
            <p 
              className="text-[#F5F5F5]/70"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Professional saxophone performances or DJ + sax fusion tailored to your event's vibe.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-8 bg-[#0D0D0D]/60 rounded-lg border border-[#C6A75E]/20"
            {...fadeInUp}
          >
            <div className="flex justify-center mb-4 text-[#C6A75E]">
              <Wine className="w-10 h-10" />
            </div>
            <h3 
              className="text-xl mb-3 text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Premium Bar Service
            </h3>
            <p 
              className="text-[#F5F5F5]/70"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Expert bartenders crafting signature cocktails with top-shelf spirits and fresh ingredients.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-8 bg-[#0D0D0D]/60 rounded-lg border border-[#C6A75E]/20"
            {...fadeInUp}
          >
            <div className="flex justify-center mb-4 text-[#C6A75E]">
              <Sparkles className="w-10 h-10" />
            </div>
            <h3 
              className="text-xl mb-3 text-[#C6A75E]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Full Setup
            </h3>
            <p 
              className="text-[#F5F5F5]/70"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Complete bar setup, glassware, garnishes, and elegant presentation for your event.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-b from-[#0F2E2E]/30 to-[#0D0D0D]">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <h2 
            className="text-3xl md:text-5xl mb-6 text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Let's Create Your Perfect Event
          </h2>
          <p 
            className="text-lg mb-8 text-[#F5F5F5]/80"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Every event is unique. Tell us about your vision and we'll craft an experience tailored just for you.
          </p>
          <Button variant="primary" size="lg" href="/booking">
            Request a Quote
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}