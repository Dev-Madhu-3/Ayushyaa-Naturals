// src/components/home/InstagramPreview.jsx
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { slideInFromBottom, staggerContainer } from "../../utils/animations";
import { Fade } from "react-awesome-reveal";

const InstagramPreview = () => {
  const instagramPosts = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767002630/IMG_20251229_153011_pumr7y.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767002629/IMG_20251229_152741_kcfnvj.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767002629/Screenshot_2025-12-29-15-26-26-98_1c337646f29875672b5a61192b9010f9_gdxnag.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767002630/IMG_20251229_153031_gaubrb.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767002629/IMG_20251229_152809_danaew.jpg",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767002629/IMG_20251229_152723_z6ymuz.jpg",
    },
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Follow Our Journey
          </h2>
          <p className="text-text-light max-w-2xl mx-auto mb-6">
            Join us on Instagram for daily inspiration, behind-the-scenes, and
            natural living tips
          </p>
          <a
            href="https://www.instagram.com/ayushyaa_naturals/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-full transition-all transform hover:scale-105"
          >
            <Instagram size={20} className="mr-2" />
            @ayushyaa_naturals
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Fade
            direction="right"
            cascade
            damping={0.1}
            delay={200}
            triggerOnce
          >
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                variants={slideInFromBottom}
                custom={index * 0.1}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <Instagram size={20} className="text-white" />
                </div>
              </motion.div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default InstagramPreview;
