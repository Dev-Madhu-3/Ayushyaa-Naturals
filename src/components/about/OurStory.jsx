// src/components/about/OurStory.jsx
import { motion } from "framer-motion";
import { slideInFromBottom, staggerContainer } from "../../utils/animations";

const OurStory = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="mb-12" variants={slideInFromBottom}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 text-center">
              The Ayushyaa Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-text-light mb-4">
                  Ayushyaa Naturals was born from a simple belief: nature
                  provides everything we need for our well-being. Our journey
                  began in a small kitchen where traditional recipes were passed
                  down through generations.
                </p>
                <p className="text-text-light mb-4">
                  What started as a passion project for creating natural
                  remedies for our family has grown into a mission to share
                  these treasures with the world. Each product tells a story of
                  heritage, purity, and love.
                </p>
                <p className="text-text-light">
                  Today, we continue to honor those traditional methods while
                  ensuring the highest standards of quality and purity. Every
                  product is handmade with the same care and attention that went
                  into the first batch created in our family kitchen.
                </p>
              </div>

              <motion.div
                className="relative"
                variants={slideInFromBottom}
                custom={0.2}
              >
                <img
                  src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767025763/view-woman-working-agricultural-sector-celebrate-labour-day-women_optimized_200_aqa6kn.jpg"
                  alt="Our Story"
                  className="rounded-2xl shadow-large"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-green/20 rounded-full -z-10"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-light-green/20 rounded-full -z-10"></div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={staggerContainer}
          >
            <motion.div
              className="text-center"
              variants={slideInFromBottom}
              custom={0.1}
            >
              <div className="text-4xl font-bold text-primary-green mb-2">
                2015
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Our Beginning
              </h3>
              <p className="text-text-light">
                Started in a small home kitchen with traditional recipes passed
                down through generations.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={slideInFromBottom}
              custom={0.2}
            >
              <div className="text-4xl font-bold text-primary-green mb-2">
                5000+
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Happy Customers
              </h3>
              <p className="text-text-light">
                Families across the country trust Ayushyaa for their natural
                wellness needs.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={slideInFromBottom}
              custom={0.3}
            >
              <div className="text-4xl font-bold text-primary-green mb-2">
                50+
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Natural Products
              </h3>
              <p className="text-text-light">
                Each carefully crafted with pure, natural ingredients and lots
                of love.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
