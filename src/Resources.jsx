import './App.css';
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';  
import first from './images/Resource_1.png';
import second from './images/Resource_2.png';
import third from './images/Recource_3.png';
import small_one from './images/Resource_4.png';
import bgPattern from './images/background.png';

export default function Resources() {
  const cards = [
    {
      title: 'The Power of Mindfulness',
      desc: 'Explore how mindfulness practices can transform your daily life and enhance your spiritual awareness.',
      img: first,
      date: 'May 15, 2023',
      time: '8 min read',
      category: 'Mindfulness'
    },
    {
      title: 'Understanding Your Chakras',
      desc: 'A comprehensive guide to the seven main chakras and how to balance them for optimal wellbeing.',
      img: second,
      date: 'April 22, 2023',
      time: '12 min read',
      category: 'Energy Healing'
    },
    {
      title: 'Tarot for Beginners',
      desc: 'A beginner\'s guide to understanding tarot cards and how to use them for personal guidance.',
      img: third,
      date: 'February 5, 2023',
      time: '15 min read',
      category: 'Divination'
    },
    {
      title: 'The Healing Power of Nature',
      desc: 'Discover how connecting with nature can enhance your spiritual practice and promote healing.',
      img: small_one,
      date: 'March 10, 2023',
      time: '10 min read',
      category: 'Nature'
    },
  ];

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
    <section className="py-12 bg-lightBackground relative overflow-hidden min-h-screen">
      {/* Background pattern image */}
      <img
        src={bgPattern}
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
      />

      {/* Heading Section */}
      <div className="w-full text-center mb-8 relative z-10">
        <motion.h2 
          className="text-primary font-montserrat font-semibold text-3xl md:text-4xl relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-[3px] after:bg-primary after:rounded"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Spiritual Resources
        </motion.h2>
      </div>

      {/* Main Content Area: Side Images + Cards */}
      <div className="flex items-start justify-center w-full relative z-10">
        {/* Cards Container */}
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, idx) => (
            <motion.div 
              className=""
              key={idx}
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col h-full transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className='relative overflow-hidden rounded-t-xl'>
                  <img src={card.img} className="w-full h-32 object-cover" alt={card.title} />
                  <span className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs">{card.category}</span>
                </div>
                <div className="p-2 text-start">
                  <h5 className="text-xl font-semibold mb-2">{card.title}</h5>
                  <p className="text-gray-700">{card.desc}</p>
                </div>
                <div className="mt-auto p-2 text-start">
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaRegCalendarAlt className="mr-1" />
                    <small>{card.date} • {card.time}</small>
                  </div>
                  <motion.a 
                    href="#" 
                    className="text-primary font-medium transition-colors duration-300 hover:text-secondary flex items-center text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Read Article
                    <FaArrowRight className="ml-2 text-primary" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Button Section */}
      <div className="w-full text-center mt-8 relative z-10">
        <motion.button 
          className="bg-dark text-white px-8 py-3 rounded-lg hover:bg-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Articles
        </motion.button>
      </div>
    </section>
  );
} 