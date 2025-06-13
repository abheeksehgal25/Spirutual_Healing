import '../App.css';
import { motion } from 'framer-motion'; // eslint-disable-next-line no-unused-vars
import personImage from '../images/sample.jpg';

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
          className="font-polysans italic font-medium text-[42px] leading-[56px] tracking-[0.38px] text-center align-middle font-playfair-display text-[#0655A0] mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          People finding inner peace
        </motion.h2>
        <motion.p 
          className="text-[#565656] font-polysans italic font-light text-[20px] leading-[48px] tracking-[-0.38px] text-center align-middle mb-8  md:text-xl mt-5"
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
              <div className="shadow-card rounded-t-xl relative p-2">
                <div className={`rounded-t-xl rounded-b-full w-full h-full flex flex-col justify-start items-center text-center min-h-[450px] gap-y-4 ${idx % 2 === 0 ? 'bg-[#E5D09A]' : 'bg-[#F6D1CC]'}`}>
                  {/* Profile and Name/Position */}
                  <div className="flex items-center justify-center pt-8">
                    <img 
                      src={card.img} 
                      alt={card.name} 
                      className="rounded-full p-0.5 w-20 h-20 object-cover mr-4" 
                    />
                    <div className="text-left">
                      <h6 className="font-semibold text-xl text-dark">{card.name}</h6>
                      <small className="text-gray-500 font-medium text-base">{card.position}</small>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="px-6">
                    <p className="text-gray-700 text-base leading-relaxed text-center">{card.desc}</p>
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