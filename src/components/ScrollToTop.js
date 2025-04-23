import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll event to determine when to show the button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Smooth scroll to top animation
  const scrollToTop = () => {
    // Add a little bounce effect before scrolling
    window.scrollTo({ top: window.scrollY - 30, behavior: "smooth" });
    
    // Small delay for the bounce effect to be noticeable
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Button animations
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.8,
      transition: { duration: 0.2 } 
    },
    hover: { 
      scale: 1.1,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.9,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const arrowVariants = {
    normal: { y: 0 },
    hover: { 
      y: -5,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 0.6 
      }
    }
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-tr from-orange-500 to-red-500 rounded-full text-white shadow-lg overflow-hidden group"
            aria-label="Scroll to top"
          >
            {/* Inner circle with pulse effect */}
            <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            
            {/* Glowing effect on hover */}
            <div className={`absolute inset-0 bg-orange-300 rounded-full ${isHovered ? 'animate-pulse opacity-20' : 'opacity-0'} transition-opacity duration-300`}></div>

            {/* Arrow icon with animation */}
            <motion.div
              variants={arrowVariants}
              initial="normal"
              animate={isHovered ? "hover" : "normal"}
            >
              <div className="relative">
                <ChevronUp className="w-6 h-6 lg:w-7 lg:h-7 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300" />
                <ArrowUp className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;