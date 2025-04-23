import React, { useState } from "react";
import ExperienceData from "../data/experience";
import { motion } from "framer-motion";
import { Clock, Building, ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-b from-white to-slate-50 mt-8 md:mt-12">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="experience" 
          className="flex flex-col text-center mb-10 w-full"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600">
            My journey in the professional world, building solutions and growing as a developer.
          </p>
        </motion.div>

        {/* Mobile View - Full width cards in a single column */}
        <div className="md:hidden space-y-6">
          {ExperienceData?.reverse().map((exp, index) => {
            const isExpanded = expanded[index] || false;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white text-gray-800 p-5 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative ${
                  isExpanded ? "ring-2 ring-blue-400 ring-opacity-50" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-3">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Building size={16} className="mr-2" />
                      <h4 className="text-base">{exp.company}</h4>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label={isExpanded ? "Collapse details" : "Expand details"}
                  >
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-24"}`}>
                  <ul className="pl-5 list-disc space-y-2 text-gray-700">
                    {exp?.description?.map((desc, i) => (
                      <li key={i} className={`text-base ${i >= 2 && !isExpanded ? "hidden" : ""}`}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  {!isExpanded && exp?.description?.length > 2 && (
                    <div className="mt-2 pt-2 text-center text-sm text-blue-500">
                      {exp?.description?.length - 2} more items...
                    </div>
                  )}
                </div>
                
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Desktop View - Timeline with wider cards */}
        <div className="hidden md:grid grid-cols-12 gap-4 mx-auto">
          {ExperienceData?.reverse().map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expanded[index] || false;
            
            const cardVariants = {
              hidden: { opacity: 0, x: isLeft ? 30 : -30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.5,
                  delay: index * 0.2
                }
              }
            };
            
            const TimelineCard = () => (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`bg-white text-gray-800 p-5 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative ${
                  isExpanded ? "ring-2 ring-blue-400 ring-opacity-50" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-3">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Building size={16} className="mr-2" />
                      <h4 className="text-base">{exp.company}</h4>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label={isExpanded ? "Collapse details" : "Expand details"}
                  >
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-24"}`}>
                  <ul className="pl-5 list-disc space-y-2 text-gray-700">
                    {exp?.description?.map((desc, i) => (
                      <li key={i} className={`text-base ${i >= 2 && !isExpanded ? "hidden" : ""}`}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  {!isExpanded && exp?.description?.length > 2 && (
                    <div className="mt-2 pt-2 text-center text-sm text-blue-500">
                      {exp?.description?.length - 2} more items...
                    </div>
                  )}
                </div>
                
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                )}
              </motion.div>
            );
            
            return isLeft ? (
              <React.Fragment key={index}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                  className="col-span-5"
                >
                  <TimelineCard />
                </motion.div>
                <div className="col-span-2 flex justify-center">
                  <div className="relative h-full flex items-center justify-center">
                    <div className="h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="w-8 h-8 absolute top-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-md flex items-center justify-center"
                    >
                      <Clock size={16} className="text-white" />
                    </motion.div>
                  </div>
                </div>
                <div className="col-span-5"></div>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <div className="col-span-5"></div>
                <div className="col-span-2 flex justify-center">
                  <div className="relative h-full flex items-center justify-center">
                    <div className="h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="w-8 h-8 absolute top-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-md flex items-center justify-center"
                    >
                      <Clock size={16} className="text-white" />
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                  className="col-span-5"
                >
                  <TimelineCard />
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;