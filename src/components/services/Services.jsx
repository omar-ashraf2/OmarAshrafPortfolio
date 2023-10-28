import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Skills from "../skills/Skills";

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            &quot;The only source of
            <motion.b whileHover={{ color: "#ffa500" }}> knowledge</motion.b> is
            <motion.b whileHover={{ color: "#ffa500" }}> experience</motion.b>
            .&quot;
          </h1>
          <span>-Albert Einstein-</span>
        </div>
        <div className="skillsTitle">
          <svg
            width="224"
            height="365"
            viewBox="0 0 224 365"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_1_11)">
              <motion.path
                d="M26.1615 326.051C11.4098 290.94 24.7666 244.476 51.4988 216.761C62.5301 205.323 81.7109 192.885 95.5355 203.588C101.682 208.344 109.73 223.761 98.2641 229.572C83.8382 236.873 71.5493 208.227 68.5554 198.883C60.1342 172.615 63.6331 141.317 76.418 115.711C105.676 57.0996 167.965 45.017 220.493 36.5384"
                stroke="#AF8E38"
                strokeWidth={6}
                strokeMiterlimit="10"
                strokeLinecap="round"
                initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
                animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              <motion.path
                d="M3.60841 323.628C16.0422 324.392 22.7643 335.278 34.1243 338.596C33.2416 328.618 32.2781 308.229 36.8181 298.481"
                stroke="#AF8E38"
                strokeWidth={6}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
                animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
            </g>
            <defs>
              <filter
                id="filter0_i_1_11"
                x="0.608315"
                y="33.5379"
                width="222.885"
                height="312.059"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1_11"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Skills />
      </motion.div>
    </motion.div>
  );
};

export default Services;
