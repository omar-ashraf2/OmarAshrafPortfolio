import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Omar Ashraf
        </motion.span>
        <div className="social">
          <motion.a
            href="https://github.com/omar-ashraf2"
            target="_blank"
            initial={{ x: -900, scale: 0.3 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img src="/githubYellow.png" alt="GitHub" />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://www.instagram.com/omar.ashraf2/"
            initial={{ x: -800, scale: 0.3 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/instagram.png" alt="Instagram" />
          </motion.a>
          <motion.a
            href="https://twitter.com/etdodger"
            target="_blank"
            initial={{ x: -700, scale: 0.3 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img src="/twitter.png" alt="Twitter" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/omar-ashraf-338580182"
            target="_blank"
            initial={{ x: -600, scale: 0.3 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="/linkedIn.png" alt="LinkedIn" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
