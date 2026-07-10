"use client";

import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Live Jazz Performance",
  },
  {
    src: "https://images.unsplash.com/photo-1767745455688-49391131f751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Premium Cocktail",
  },
  {
    src: "https://images.unsplash.com/photo-1768777270882-9f74939fee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Wedding Event",
  },
  {
    src: "https://images.unsplash.com/photo-1758526348463-08177c90e51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Professional Bartender",
  },
  {
    src: "https://images.unsplash.com/photo-1758587421184-339f385900ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Live Music",
  },
  {
    src: "https://images.unsplash.com/photo-1690921822670-5929218ab41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Signature Cocktail",
  },
  {
    src: "https://images.unsplash.com/photo-1691067987422-befcaaaf3e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Private Event",
  },
  {
    src: "https://images.unsplash.com/photo-1768508950719-4d76978fdf44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Corporate Event",
  },
  {
    src: "https://images.unsplash.com/photo-1748674749819-60e93fb6f1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Cocktail Presentation",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#0D0D0D] min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-7xl text-[#C6A75E] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Gallery
          </h1>

          <p
            className="text-white/75 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Explore unforgettable moments where handcrafted cocktails,
            exceptional service and live jazz create timeless experiences.
          </p>
        </motion.div>

        {/* Gallery */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            768: 2,
            1024: 3,
          }}
        >
          <Masonry gutter="24px">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span
                    className="text-[#C6A75E] text-lg px-4 text-center"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </main>
  );
}