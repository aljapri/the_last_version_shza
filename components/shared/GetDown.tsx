import { motion } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";
import "./shared.css";
export default function GetDown() {
  return (
    <div className="getDown" onClick={()=>{
      window.scrollTo({
        top: 900,
        behavior: "smooth",
      });
    }}>
      <motion.div
        animate={{ y: [0, -20, 0] }} // Moves the button up and down
        transition={{
          duration: 1, // Duration of one cycle
          repeat: Infinity, // Repeat the animation indefinitely
          repeatType: "loop", // Type of repetition
          ease: "easeInOut", // Easing function for smooth animation
        }}
      >
        <FaArrowCircleDown size={100} fill="white" />
      </motion.div>
    </div>
  );
}
