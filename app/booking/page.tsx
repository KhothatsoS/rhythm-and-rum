"use client"

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { Instagram, MessageCircle, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - In production, this would call your email service
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          location: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#0D0D0D] pt-20">
      <SEO 
        title="Book Your Event" 
        description="Book Rhythm & Rum Co. for your next event. Premium cocktails and live jazz for private events, weddings, and corporate functions."
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
            Book Your Experience
          </h1>
          <p 
            className="text-xl text-[#F5F5F5]/80"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Let's create something unforgettable together. Fill out the form below or reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            {...fadeInUp}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="fullName" 
                    className="block text-[#F5F5F5] mb-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0F2E2E]/30 border border-[#C6A75E]/30 rounded-lg text-[#F5F5F5] focus:border-[#C6A75E] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-[#F5F5F5] mb-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0F2E2E]/30 border border-[#C6A75E]/30 rounded-lg text-[#F5F5F5] focus:border-[#C6A75E] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-[#F5F5F5] mb-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0F2E2E]/30 border border-[#C6A75E]/30 rounded-lg text-[#F5F5F5] focus:border-[#C6A75E] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="eventType" 
                    className="block text-[#F5F5F5] mb-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0F2E2E]/30 border border-[#C6A75E]/30 rounded-lg text-[#F5F5F5] focus:border-[#C6A75E] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <option value="">Select Event Type</option>
                    <option value="private">Private Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="popup">Pop-Up / Residency</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="eventDate" 
                    className="block text-[#F5F5F5] mb-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0F2E2E]/30 border border-[#C6A75E]/30 rounded-lg text-[#F5F5F5] focus:border-[#C6A75E] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="budget" 
                    className="block text-[#F5F5F5] mb-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0F2E2E]/30 border border-[#C6A75E]/30 rounded-lg text-[#F5F5F5] focus:border-[#C6A75E] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-50k">Under R50,000</option>
                    <option value="50k-100k">R50,000 - R100,000</option>
                    <option value="100k-200k">R100,000 - R200,000</option>
                    <option value="over-200k">Over R200,000</option>
                    <option value="discuss">Prefer to Discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label 
                  htmlFor="location" 
                  className="block text-[#F5F5F5] mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Event Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="City or Venue Name"
                  className="w-full px-4 py-3 bg-[#0F2E2E]/30 border border-[#C6A75E]/30 rounded-lg text-[#F5F5F5] focus:border-[#C6A75E] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[#F5F5F5] mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Tell Us About Your Event
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Share your vision, guest count, and any specific requests..."
                  className="w-full px-4 py-3 bg-[#0F2E2E]/30 border border-[#C6A75E]/30 rounded-lg text-[#F5F5F5] focus:border-[#C6A75E] focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                ></textarea>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-[#0F2E2E]/50 border border-[#C6A75E]/50 rounded-lg">
                  <p className="text-[#C6A75E]" style={{ fontFamily: 'var(--font-sans)' }}>
                    Thank you! We've received your request and will be in touch shortly.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-[#4B0F1A]/50 border border-red-500/50 rounded-lg">
                  <p className="text-red-400" style={{ fontFamily: 'var(--font-sans)' }}>
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            {...fadeInUp}
          >
            <div className="p-8 bg-[#0F2E2E]/30 border border-[#C6A75E]/20 rounded-lg">
              <h3 
                className="text-2xl mb-6 text-[#C6A75E]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:bookings@rhythmandrumco.co.za"
                  className="flex items-start gap-3 text-[#F5F5F5]/80 hover:text-[#C6A75E] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#F5F5F5] mb-1">Email</p>
                    <p className="text-sm">bookings@rhythmandrumco.co.za</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/27XXXXXXXXX?text=Hi%20Rhythm%20%26%20Rum%20Co%2C%20I%20would%20like%20to%20book%20an%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#F5F5F5]/80 hover:text-[#C6A75E] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <MessageCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#F5F5F5] mb-1">WhatsApp</p>
                    <p className="text-sm">Chat with us directly</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/rhythmandrumco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#F5F5F5]/80 hover:text-[#C6A75E] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Instagram className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#F5F5F5] mb-1">Instagram</p>
                    <p className="text-sm">@rhythmandrumco</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-[#4B0F1A]/20 border border-[#C6A75E]/20 rounded-lg">
              <h4 
                className="text-xl mb-4 text-[#C6A75E]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                What Happens Next?
              </h4>
              <div 
                className="space-y-3 text-[#F5F5F5]/70 text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-[#C6A75E]">1.</span>
                  <p>We'll review your request within 24 hours</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C6A75E]">2.</span>
                  <p>Schedule a consultation to discuss your vision</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C6A75E]">3.</span>
                  <p>Receive a custom proposal tailored to your event</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#C6A75E]">4.</span>
                  <p>Secure your date and start planning the details</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}