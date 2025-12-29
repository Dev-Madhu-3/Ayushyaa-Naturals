// src/pages/WhyNatural.jsx
import { motion } from "framer-motion";
import { Leaf, AlertCircle, CheckCircle, Flower } from "lucide-react";
import { slideInFromBottom, staggerContainer } from "../utils/animations";

const WhyNatural = () => {
  const benefits = [
    {
      icon: <Leaf size={32} className="text-accent-green" />,
      title: "Gentle on Your Body",
      description:
        "Natural products work in harmony with your body's natural processes, reducing the risk of irritation and adverse reactions.",
    },
    {
      icon: <AlertCircle size={32} className="text-accent-green" />,
      title: "No Harmful Chemicals",
      description:
        "Avoid the toxic chemicals found in conventional products that can disrupt hormones and cause long-term health issues.",
    },
    {
      icon: <CheckCircle size={32} className="text-accent-green" />,
      title: "Nutrient-Rich",
      description:
        "Natural ingredients are packed with vitamins, minerals, and antioxidants that nourish and protect your body.",
    },
    {
      icon: <Flower size={32} className="text-accent-green" />,
      title: "Better for the Environment",
      description:
        "Natural products are biodegradable and sustainable, reducing your environmental footprint.",
    },
  ];

  const comparison = [
    {
      aspect: "Ingredients",
      natural: "Plant-based, mineral-rich",
      chemical: "Synthetic, petroleum-based",
    },
    {
      aspect: "Effect on Skin",
      natural: "Nourishing, balancing",
      chemical: "Can cause irritation, dryness",
    },
    {
      aspect: "Environmental Impact",
      natural: "Biodegradable, sustainable",
      chemical: "Polluting, non-biodegradable",
    },
    {
      aspect: "Long-term Benefits",
      natural: "Improves health over time",
      chemical: "May cause cumulative damage",
    },
  ];

  return (
    <div className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Why Choose Natural?
          </h1>
          <p className="text-text-light max-w-3xl mx-auto">
            The choice between natural and chemical products is more than just a
            preference—it's a decision that affects your health and the planet
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-soft"
              variants={slideInFromBottom}
              custom={index * 0.1}
            >
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-light">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-cream rounded-2xl p-8 shadow-soft mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom}
        >
          <h2 className="text-2xl font-bold text-text-dark mb-6 text-center">
            Natural vs. Chemical Products
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-text-dark">Aspect</th>
                  <th className="text-left py-3 px-4 text-primary-green">
                    Natural Products
                  </th>
                  <th className="text-left py-3 px-4 text-red-500">
                    Chemical Products
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-text-dark">
                      {item.aspect}
                    </td>
                    <td className="py-4 px-4 text-text-light">
                      {item.natural}
                    </td>
                    <td className="py-4 px-4 text-text-light">
                      {item.chemical}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="bg-primary-green rounded-2xl p-8 text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom}
        >
          <h2 className="text-2xl font-bold mb-4">
            Make the Switch to Natural Today
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Your body deserves the best that nature has to offer. Start your
            journey to a healthier, more natural lifestyle with Ayushyaa
            Naturals.
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-white text-primary-green font-medium rounded-full hover:bg-cream transition-all transform hover:scale-105"
          >
            Explore Natural Products
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyNatural;
