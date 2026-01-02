// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { slideInFromBottom } from "../utils/animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

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
            Get in Touch
          </h1>
          <p className="text-text-light max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom}
          >
            <h2 className="text-2xl font-bold text-text-dark mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={20} className="text-primary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">Address</h3>
                  <p className="text-text-light">
                    123 Nature Lane, Green Valley
                    <br />
                    Bangalore, Karnataka 560001
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone size={20} className="text-primary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">Phone</h3>
                  <p className="text-text-light">
                    +91 98765 43210
                    <br />
                    Mon-Fri: 9am-6pm IST
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={20} className="text-primary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">Email</h3>
                  <p className="text-text-light">
                    info@ayushyaa.com
                    <br />
                    support@ayushyaa.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-semibold text-text-dark mb-3">
                Business Hours
              </h3>
              <div className="space-y-2 text-text-light">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom}
            custom={0.2}
          >
            <h2 className="text-2xl font-bold text-text-dark mb-6">
              Send Us a Message
            </h2>

            {/* <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-dark font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-text-dark font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-text-dark font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-text-dark font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary-green hover:bg-light-green text-white font-medium rounded-lg transition-all transform hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form> */}
            <div className="bg-cream rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-text-dark mb-4">
                Get in Touch via WhatsApp
              </h3>
              <p className="text-text-light mb-6">
                For the fastest response, please reach out to us on WhatsApp
                with your inquiry.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hello! I have a question about Ayushyaa Naturals."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
