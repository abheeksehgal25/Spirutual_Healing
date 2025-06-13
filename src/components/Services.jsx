import { motion } from 'framer-motion'; // eslint-disable-next-line no-unused-vars
import yogaImg from '../images/yoga.jpg'; // Placeholder for new images
import tarotImg from '../images/tarot.jpg'; // Placeholder for new images
import numerologyImg from '../images/numerology_2.png'; // Placeholder for new images
import spiritualHealingImg from '../images/spiritual_healing.jpg'; // Placeholder for new images

export default function Services() {
  const servicesData = [
    {
      title: 'Yoga',
      img: yogaImg,
    },
    {
      title: 'Tarot Reading',
      img: tarotImg,
    },
    {
      title: 'Numerology',
      img: numerologyImg,
    },
    {
      title: 'Spiritual Healing',
      img: spiritualHealingImg,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="services" className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2 
          className="text-center font-bold font-playfair-display italic text-5xl text-blue-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <h3 className="text-center font-bold font-playfair-display text-5xl text-blue-800 mt-2 mb-12 relative">
          
          <span className="mt-5 block h-1 w-28 bg-secondary rounded mx-auto mb-2" />
        </h3>

        <div className="flex justify-center">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-11"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-[250px] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-85 p-4 text-center rounded-b-xl">
                    <h3 className="text-xl font-semibold text-dark">{service.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 