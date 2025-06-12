import './App.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import big_one from './images/big_one.jpg';
import small_one from './images/small_one.jpg';
import first from './images/first.jpg';

export default function Innerpeace() {
  const cards = [
    {
      desc: "The spiritual healing sessions have transformed my life. I've found a deeper sense of peace and purpose that I never thought possible.",
      img: big_one,
      name: "Devshree Annad",
      position: "Yoga Instructor",
      rating: 5
    },
    {
      desc: "The guidance and support I received during my spiritual journey has been invaluable. I've learned to trust my intuition and embrace my true self.",
      img: small_one,
      name: "Sarah Johnson",
      position: "Meditation Practitioner",
      rating: 5
    },
    {
      desc: "The combination of traditional healing practices and modern techniques has helped me overcome years of emotional blockages. I'm truly grateful.",
      img: first,
      name: "Michael Chen",
      position: "Life Coach",
      rating: 5
    }
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
    <section className="py-12 text-center bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="mb-8 text-primary font-montserrat font-semibold text-3xl md:text-4xl relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-[3px] after:bg-primary after:rounded"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          People Finding Inner Peace
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's find out how our clients broke through emotional barriers with spiritual therapy
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, idx) => (
            <motion.div 
              className="w-full" 
              key={idx}
              variants={itemVariants}
            >
              <div className="bg-white text-center shadow-lg p-6 rounded-xl h-full border border-black/10 transition-all duration-300 hover:border-primary hover:-translate-y-1">
                <div className="mb-4 text-primary opacity-50 text-2xl">
                  <FaQuoteLeft />
                </div>
                
                <div className="mb-4">
                  <p className="px-3 text-gray-700">{card.desc}</p>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <img 
                    src={card.img} 
                    alt={card.name} 
                    className="rounded-full border-4 border-primary p-0.5" 
                    width="60" 
                    height="60" 
                  />
                  <div className="text-left">
                    <h6 className="font-semibold text-lg mb-0">{card.name}</h6>
                    <small className="text-gray-500">{card.position}</small>
                    <div className="flex mt-1 text-yellow-500">
                      {[...Array(card.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 