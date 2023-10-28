/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 35,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
  hover: {
    y: 10,
    rotate: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ icon, hueA, hueB }) {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-120px" });
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      ref={ref}
      className="card-container"
      initial="offscreen"
      whileInView={isInView && "onscreen"}
      whileHover="hover"
    >
      <motion.div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <img src={icon} alt="" />
      </motion.div>
    </motion.div>
  );
}

const food = [
  ["/html5.png", 330, 360],
  ["/css3.png", 206.57, 250],
  ["/JavaScript.png", 60, 90],
  ["/react.png", 189.5, 210],
  ["/nextjs.svg", 1.5, 188.5],
  ["/sass.png", 300, 50],
  ["/Tailwind.png", 197.85, 70],
  ["/typescript.png", 211.4, 300],
  ["/redux.svg", 290, 320],
  ["/github.png", 0, 100],
];

const Skills = () => {
  return (
    <div className="skill">
      {food.map(([icon, hueA, hueB], i) => (
        <Card icon={icon} hueA={hueA} hueB={hueB} key={i} />
      ))}
    </div>
  );
};

export default Skills;
