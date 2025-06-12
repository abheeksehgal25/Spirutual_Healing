import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaMoon, FaSun, FaStar, FaYinYang } from 'react-icons/fa';

export default function Services() {
  const [activeTab, setActiveTab] = useState('healing');

  const services = {
    healing: [
      {
        title: 'Energy Healing',
        description: 'Experience deep healing through energy work that balances your chakras and removes blockages.',
        icon: <FaHandHoldingHeart className="text-primary text-2xl" />,
        duration: '60-90 mins',
        price: '$120'
      },
      {
        title: 'Chakra Balancing',
        description: 'Restore harmony to your energy centers through guided meditation and energy work.',
        icon: <FaStar className="text-primary text-2xl" />,
        duration: '45-60 mins',
        price: '$90'
      }
    ],
    meditation: [
      {
        title: 'Guided Meditation',
        description: 'Journey inward with personalized meditation sessions tailored to your needs.',
        icon: <FaMoon className="text-primary text-2xl" />,
        duration: '30-45 mins',
        price: '$75'
      },
      {
        title: 'Mindfulness Training',
        description: 'Learn practical techniques to stay present and cultivate inner peace.',
        icon: <FaSun className="text-primary text-2xl" />,
        duration: '60 mins',
        price: '$85'
      }
    ],
    yoga: [
      {
        title: 'Private Yoga Sessions',
        description: 'One-on-one yoga instruction focused on your specific needs and goals.',
        icon: <FaYinYang className="text-primary text-2xl" />,
        duration: '60 mins',
        price: '$95'
      },
      {
        title: 'Therapeutic Yoga',
        description: 'Healing yoga practices designed to address physical and emotional challenges.',
        icon: <FaHandHoldingHeart className="text-primary text-2xl" />,
        duration: '75 mins',
        price: '$110'
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-background py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-center mb-8 text-primary font-montserrat font-semibold text-3xl md:text-4xl relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-[3px] after:bg-primary after:rounded"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <div className="flex justify-center gap-4 mb-8">
          {['healing', 'meditation', 'yoga'].map((tab) => (
            <motion.button
              key={tab}
              className={`px-6 py-2 rounded border font-medium transition-colors duration-300 ${activeTab === tab ? 'bg-primary border-primary text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services[activeTab].map((service, index) => (
            <motion.div
              key={index}
              className=""
              variants={itemVariants}
            >
              <div className="bg-white border border-black/10 transition-all duration-300 hover:border-primary rounded-xl shadow p-8 flex flex-col h-full">
                <div className="w-[60px] h-[60px] bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">{service.duration}</span>
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                </div>
                <motion.button
                  className="bg-primary border border-primary text-white px-6 py-2 rounded hover:bg-secondary hover:border-secondary transition-colors duration-300 mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 