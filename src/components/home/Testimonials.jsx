// src/components/home/Testimonials.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import { slideInFromBottom } from "../../utils/animations";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "I've been using Ayushyaa's herbal shampoo for three months now, and the difference in my hair is remarkable. It feels healthier, shinier, and the natural fragrance is so calming.",
      avatar: "https://picsum.photos/seed/priya/150/150.jpg",
    },
    {
      id: 2,
      name: "Raj Patel",
      location: "Delhi, India",
      rating: 5,
      text: "The natural laddus are not just delicious but also guilt-free! My kids love them, and I love that they're getting nutrition without any chemicals or preservatives.",
      avatar: "https://picsum.photos/seed/raj/150/150.jpg",
    },
    {
      id: 3,
      name: "Ananya Reddy",
      location: "Bangalore, India",
      rating: 4,
      text: "The skincare range has transformed my daily routine. I have sensitive skin, and these products have been so gentle yet effective. I'm never going back to commercial products.",
      avatar: "https://picsum.photos/seed/ananya/150/150.jpg",
    },
  ];

  return (
    <section className="py-16 bg-cream natural-texture">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Real experiences from people who have embraced the Ayushyaa
            lifestyle
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-soft h-full flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromBottom}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-text-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-text-light">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <div className="relative flex-grow">
                  <Quote
                    size={40}
                    className="absolute -top-2 -left-2 text-accent-green/20"
                  />
                  <p className="text-text-dark relative z-10">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-pagination flex justify-center space-x-2"></div>
      </div>
    </section>
  );
};

export default Testimonials;
