// src/components/about/OurPromise.jsx
import { motion } from "framer-motion";
import { Leaf, Heart, Award, Users } from "lucide-react";
import { slideInFromBottom, staggerContainer } from "../../utils/animations";

const OurPromise = () => {
  const promises = [
    {
      icon: <Leaf size={32} className="text-accent-green" />,
      title: "100% Natural",
      description:
        "We promise that every ingredient in our products comes from nature, with no artificial additives or preservatives.",
    },
    {
      icon: <Heart size={32} className="text-accent-green" />,
      title: "Handmade with Care",
      description:
        "Each product is carefully crafted by hand, ensuring the personal touch and attention to detail that machines cannot replicate.",
    },
    {
      icon: <Award size={32} className="text-accent-green" />,
      title: "Quality Assured",
      description:
        "We follow strict quality control measures and use only the finest ingredients to ensure you receive the best products.",
    },
    {
      icon: <Users size={32} className="text-accent-green" />,
      title: "Community Focused",
      description:
        "We work directly with local farmers and artisans, supporting sustainable livelihoods and traditional knowledge.",
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
            Our Promise to You
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
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all"
              variants={slideInFromBottom}
              custom={index * 0.1}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                {promise.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">
                {promise.title}
              </h3>
              <p className="text-text-light">{promise.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPromise;
