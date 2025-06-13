import { motion } from 'framer-motion'; // eslint-disable-next-line no-unused-vars

export default function Events() {
  const eventsData = [
    {
      month: 'May',
      day: '11',
      title: 'The Healing Power of Nature',
      description: 'Discover how connecting with nature can enhance your spiritual practice and promote healing.'
    },
    {
      month: 'May',
      day: '11',
      title: 'The Healing Power of Nature',
      description: 'Discover how connecting with nature can enhance your spiritual practice and promote healing.'
    },
    {
      month: 'May',
      day: '11',
      title: 'The Healing Power of Nature',
      description: 'Discover how connecting with nature can enhance your spiritual practice and promote healing.'
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="events" className="bg-lightBackground py-12 flex-grow">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <motion.h2 
          className="text-center font-bold font-playfair-display italic text-5xl text-blue-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Events
        </motion.h2>
        <h3 className="text-center font-bold font-playfair-display text-5xl text-blue-800 mt-2 mb-12 relative">
          
          <span className="mt-5 block h-1 w-28 bg-secondary rounded mx-auto mb-2" />
        </h3>

        {/* Events List */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {eventsData.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 flex items-center border border-gray-100 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 text-center bg-eventCardBackground p-3 rounded-lg mr-4 w-20">
                <p className="text-sm font-semibold text-gray-700">{event.month}</p>
                <p className="text-2xl font-bold text-dark">{event.day}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-1">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 