"use client"

import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title?: string;
  description?: string;
}

const defaultTitle = 'Rhythm & Rum Co. - Where Jazz Meets the Pour';
const defaultDescription = 'Premium cocktail service and live jazz performances for private events, weddings, and corporate functions. Elevate your event with Rhythm & Rum Co.';

export function SEO({ title, description }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Update page title
    document.title = title ? `${title} | Rhythm & Rum Co.` : defaultTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || defaultDescription;
      document.head.appendChild(meta);
    }
  }, [title, description, location]);

  return null;
}