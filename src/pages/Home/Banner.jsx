import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 3, repeat: Infinity }}
              src={team1}
              className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500 shadow-2xl"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 3, 
                delay:3,
                repeat: Infinity }}
              src={team2}
              className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500 shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="text-5xl font-bold"
            >
              Latest Job for you!
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
