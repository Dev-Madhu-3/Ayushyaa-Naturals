// src/components/home/WhyChooseUs.jsx
import { motion } from "framer-motion";
import { Leaf, Heart, Shield, Award } from "lucide-react";
import { slideInFromBottom, staggerContainer } from "../../utils/animations";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Leaf size={32} className="text-accent-green" />,
      title: "100% Natural Ingredients",
      description:
        "All our products are made from pure, natural ingredients sourced directly from nature.",
      delay: 0.1,
    },
    {
      icon: <Heart size={32} className="text-accent-green" />,
      title: "Handcrafted with Love",
      description:
        "Each product is carefully handmade by skilled artisans following traditional methods.",
      delay: 0.2,
    },
    {
      icon: <Shield size={32} className="text-accent-green" />,
      title: "Chemical-Free",
      description:
        "We promise no harmful chemicals, preservatives, or artificial fragrances in any of our products.",
      delay: 0.3,
    },
    {
      icon: <Award size={32} className="text-accent-green" />,
      title: "Quality Assured",
      description:
        "Our products undergo strict quality checks to ensure you receive only the best.",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Why Choose Ayushyaa Naturals
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            We're committed to bringing you the purest, most natural products
            for your wellness journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-cream rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all"
              variants={slideInFromBottom}
              custom={feature.delay}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-text-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
