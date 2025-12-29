// src/pages/About.jsx
import { motion } from "framer-motion";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import OurPromise from "../components/about/OurPromise";
import { fadeIn } from "../utils/animations";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <OurStory />
      <OurPromise />
    </motion.div>
  );
};

export default About;
