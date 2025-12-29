// src/components/about/AboutHero.jsx
import { motion } from "framer-motion";
import { fadeIn, slideInFromBottom } from "../../utils/animations";

const AboutHero = () => {
  return (
    <section className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/about-hero/1920/600.jpg"
          alt="About Ayushyaa Naturals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-green/70"></div>
      </div>

      <div className="relative container mx-auto h-full flex items-center px-4">
        <motion.div
          className="max-w-3xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={slideInFromBottom}
          >
            Our Story: Bringing Nature's Best to You
          </motion.h1>

          <motion.p
            className="text-xl text-white/90"
            variants={slideInFromBottom}
            custom={0.2}
          >
            From our family to yours, a journey of wellness rooted in tradition
            and nature
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
