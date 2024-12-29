/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CurrentButton from '../ui/CurrentButton';
import CoolMode from '../ui/CoolMode';
import TypingEffect from 'react-typing-effect';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    document.title = "Pratham's Portfolio - Contact";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_id2bs7a',
        'template_wm6xqkl', 
        e.target,
        'UBEPZL3oALdYJxdDT' 
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (e) => {
          toast.error('Error - ', e);
        }
      );
  };

  return (
    <section className="py-32 md:py-12 text-white h-full w-full relative select-none">
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="flex flex-col md:flex-row container mx-auto px-4 relative z-10 items-center">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 px-4 sm:px-16  md:px-24 lg:px-32 select-none">
          <CoolMode>
            <motion.h2
              className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              Get In Touch
            </motion.h2>
          </CoolMode>
          <TypingEffect
            text="I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out."
            speed={50}
            eraseSpeed={1000}
            typingDelay={500}
            eraseDelay={20000000}
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-opacity-40 p-2 md:p-8 rounded-lg space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-md font-semibold select-none"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-transparent border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-md font-semibold select-none"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-transparent border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-md font-semibold select-none"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-transparent border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                rows="5"
                required
              ></textarea>
            </div>

            <CurrentButton>Send Message</CurrentButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
