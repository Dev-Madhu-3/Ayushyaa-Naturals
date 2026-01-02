// src/components/home/HeroSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  //   const [activeIndex, setActiveIndex] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Pure. Natural. Handmade with Love.",
      subtitle:
        "Discover the essence of wellness with our chemical-free, herbal products",
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767011531/beautiful-still-life-with-herbal-medicine_optimized_200_zvzboo.jpg",
      cta1: { text: "Explore Products", link: "/products" },
      cta2: { text: "Why Ayushyaa", link: "/why-natural" },
    },
    {
      id: 2,
      title: "Nourish Your Body, Naturally",
      subtitle: "Traditional recipes for modern wellness",
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767028077/top-view-little-round-cookies-soft-cake-cookies-tea-white-surface_optimized_200_od4zgh.jpg",
      cta1: { text: "Our Products", link: "/products" },
      cta2: { text: "Our Promise", link: "/why-natural" },
    },
    {
      id: 3,
      title: "Handcrafted with Care",
      subtitle: "Each product tells a story of purity and tradition",
      image:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767028077/top-view-green-smoothie-white-background-with-leaves_optimized_200_egd50d.jpg",
      cta1: { text: "Shop Now", link: "/products" },
      cta2: { text: "About Us", link: "/about" },
    },
  ];

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        effect="slide"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        // direction={'vertical'}
        loop={true}
        speed={800}
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-green/70 to-transparent"></div>
            </div>

            <div className="relative container mx-auto h-full flex items-center px-4">
              <div className="max-w-2xl text-white">
                <Slide direction="down" delay={200}>
                  <div className="flex items-center space-x-2 mb-4">
                    <Leaf size={24} className="text-accent-green" />
                    <span className="text-accent-green font-medium">
                      100% Natural
                    </span>
                  </div>
                </Slide>

                <Fade direction="up" delay={200}>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                </Fade>

                <Fade direction="up" delay={200}>
                  <p className="text-xl mb-8 text-white/90">{slide.subtitle}</p>
                </Fade>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={slide.cta1.link}
                    className="px-8 py-3 bg-accent-green hover:bg-light-green text-white font-medium rounded-full inline-flex items-center justify-center transition-transform hover:scale-105"
                  >
                    {slide.cta1.text}
                    <ArrowRight size={18} className="ml-2" />
                  </Link>

                  <Link
                    to={slide.cta2.link}
                    className="px-8 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-full inline-flex items-center justify-center transition-transform hover:scale-105"
                  >
                    {slide.cta2.text}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index ? "bg-accent-green w-8" : "bg-white/50"
            }`}
            onClick={() => swiper.slideTo(index)}
          ></button>
        ))}
      </div> */}

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
