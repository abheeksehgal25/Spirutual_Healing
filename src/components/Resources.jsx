import '../App.css';
import { FaArrowRight, FaMapMarkerAlt  } from 'react-icons/fa';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import first from '../images/Resource_1.png';
import second from '../images/Resource_2.png';
import third from '../images/Recource_3.png';
import small_one from '../images/Resource_4.png';
import bgPattern from '../images/background.jpg';

export default function Resources() {
  const cards = [
    {
      title: 'The Power of Mindfulness',
      desc: 'Explore how mindfulness practices can transform your daily life and enhance your spiritual awareness.',
      img: first,
      date: 'May 15, 2023',
      time: '8 min read',
      
    },
    {
      title: 'Understanding Your Chakras',
      desc: 'A comprehensive guide to the seven main chakras and how to balance them for optimal wellbeing.',
      img: second,
      date: 'April 22, 2023',
      time: '12 min read',
      
    },
    {
      title: 'Tarot for Beginners',
      desc: 'A beginner\'s guide to understanding tarot cards and how to use them for personal guidance.',
      img: third,
      date: 'February 5, 2023',
      time: '15 min read',
      
    },
    {
      title: 'The Healing Power of Nature',
      desc: 'Discover how connecting with nature can enhance your spiritual practice and promote healing.',
      img: small_one,
      date: 'March 10, 2023',
      time: '10 min read',
      
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
    <section id="resources" className="py-12 bg-lightBackground relative overflow-hidden min-h-screen">
      {/* Background pattern image */}
      <img
        src={bgPattern}
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
      />

      {/* Heading Section */}
      <div className="w-full text-center mb-8 relative z-10">
        <motion.h2 
          className="font-polysans italic font-medium text-[42px] leading-[56px] tracking-[0.38px] text-center align-middle font-playfair-display text-[#0655A0] mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Spiritual Resources
        </motion.h2>
        <h3 className="text-center font-bold font-playfair-display text-5xl text-blue-800 mt-2 mb-12 relative">
          
          <span className="mt-5 block h-1 w-28 bg-secondary rounded mx-auto mb-2" />
        </h3>
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
                  <img src={card.img} className="w-full h-48 object-cover" alt={card.title} />
              
                </div>
                <div className="p-2 text-start">
                  <h5 className="font-urbanist font-bold text-[18px] leading-[21.33px] tracking-normal align-middle text-[#0655A0] mb-2">{card.title}</h5>
                  <p className= "font-urbanist font-normal text-[12.19px] leading-[18.29px] tracking-normal align-middle text-[#355070]">{card.desc}</p>
                </div>
                <div className="mt-auto p-2 text-start">
                  <div className="flex items-center text-[#6B7280] font-['Font_1'] font-normal text-[10.67px] leading-[15.24px] tracking-normal align-middle">
                    <FaMapMarkerAlt  className="mr-1" />
                    <small>{card.date} • {card.time}</small>
                  </div>
                  <motion.a 
                    href="#" 
                    className="text-[#B56576] font-['Font_1'] font-medium text-[12.19px] leading-[18.29px] tracking-normal align-middle transition-colors duration-300 hover:text-secondary flex items-center text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Read Article
                    <FaArrowRight className="ml-2 text-[#B56576]" />
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
          className="bg-[#0655A0] text-white px-8 py-3 rounded-lg hover:bg-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Articles
        </motion.button>
      </div>
    </section>
  );
} 