import '../App.css';
import { motion } from 'framer-motion';
import personImage from '../images/big_one.jpg';

export default function Innerpeace() {
  const cards = [
    {
      desc: "My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.",
      img: personImage,
      name: "Devshree annad",
      position: "Corporate lawyer",
    },
    {
      desc: "My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.",
      img: personImage,
      name: "Devshree annad",
      position: "Corporate lawyer",
    },
    {
      desc: "My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.",
      img: personImage,
      name: "Devshree annad",
      position: "Corporate lawyer",
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
    <section id="inner-peace" className="py-12 text-center bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="mb-6 font-greatVibes text-gray-600 text-6xl md:text-7xl relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          People finding inner peace
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-8 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's find out how my clients broke those emotional barrier with my spiritual therapy
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12"
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
              <div className="bg-cardBackground text-center shadow-card px-6 py-8 rounded-t-xl rounded-b-full overflow-hidden relative flex flex-col justify-between">
                
                <div className="mb-4">
                  <p className="text-gray-700 text-base leading-relaxed">{card.desc}</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 mt-auto w-full">
                  <img 
                    src={card.img} 
                    alt={card.name} 
                    className="rounded-full border-4 border-primary p-0.5 w-20 h-20 object-cover mb-2" 
                  />
                  <div className="text-center">
                    <h6 className="font-semibold text-xl mb-0 text-dark">{card.name}</h6>
                    <small className="text-gray-500 font-medium text-base">{card.position}</small>
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