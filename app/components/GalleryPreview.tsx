import Link from "next/link";

const previewImages = [
  "https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1767745455688-49391131f751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1768777270882-9f74939fee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1758526348463-08177c90e51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1758587421184-339f385900ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1690921822670-5929218ab41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
];

export default function GalleryPreview() {
  return (
    <section className="bg-[#121212] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl text-[#C6A75E] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Gallery
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            A glimpse into the unforgettable moments we've helped create.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl group"
            >
              <img
                src={image}
                alt="Rhythm & Rum"
                className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-block border border-[#C6A75E] text-[#C6A75E] px-8 py-3 rounded-full hover:bg-[#C6A75E] hover:text-black transition duration-300"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}